import sharp from "sharp"
import { v4 as uuidv4 } from "uuid"
import * as Sentry from "@sentry/node"
import imagemin from "imagemin"
import mozjpeg from "imagemin-mozjpeg"
import { config } from "dotenv"
import AWS from "aws-sdk"
config()
const { AWS_ID, AWS_SECRET } = process.env

const s3 = new AWS.S3({
  accessKeyId: AWS_ID,
  secretAccessKey: AWS_SECRET,
})

const getInitParams = (
  filename: string,
  createReadStream: any,
  Bucket: string
) => {
  return {
    ACL: "public-read",
    Bucket,
    Key: `${uuidv4()}.${filename}`,
    Body: createReadStream,
    Conditions: [{ acl: "public-read" }],
  }
}

const deleteFileBucket = async (fileKey: string, Bucket: string) => {
  if (fileKey) {
    // @ts-ignore
    await s3
      .deleteObject({
        Key: fileKey,
        Bucket,
      })
      .promise()
  }
}

const convertToJpg = async (input: Buffer) => {
  return sharp(input).jpeg().toBuffer()
}

const getKeyPath = (path: string) => {
  return path.slice(path.lastIndexOf("/") + 1, path.length)
}

export const uploadBuffer = async (
  buffer: Buffer,
  filename: string,
  Bucket: string
) => {
  try {
    const miniBuffer = await imagemin.buffer(buffer, {
      plugins: [convertToJpg, mozjpeg({ quality: 50 })],
    })

    const params: any = getInitParams(
      `${filename.slice(0, filename.lastIndexOf("."))}.jpeg`,
      miniBuffer,
      Bucket
    )
    const { Location } = await s3.upload(params).promise()

    return Location
  } catch (error) {
    throw new Error(`Uploading buffer to bucket error: ${error.message}`)
  }
}

const getBufferFromStream = async (readableStream: any) => {
  try {
    const buffers: Uint8Array[] = []

    const buffer = await new Promise<Buffer | null>(async (res) =>
      readableStream
        .createReadStream()
        .on("data", (chunk: any) => {
          buffers.push(chunk)
        })
        .on("end", () => {
          res(Buffer.concat(buffers))
        })
        .on("error", (err: any) => {
          Sentry.captureException(err)
          res(null)
        })
    )

    return buffer
  } catch (error) {
    throw new Error(`Creating buffer error: ${error.message}`)
  }
}

const uploadNoImage = async (readableStream: any, Bucket: string) => {
  try {
    const stream = readableStream.createReadStream()

    const params: any = getInitParams(readableStream.filename, stream, Bucket)
    const { Location } = await s3.upload(params).promise()

    return Location
  } catch (error) {
    throw new Error(`Uploading file to bucket error: ${error.message}`)
  }
}

export const uploadFile = async (file: any, Bucket: string) => {
  try {
    const readableStream = await file
    const isImage = readableStream.mimetype.split("/")[0] === "image"

    if (isImage) {
      const buffer = await getBufferFromStream(readableStream)

      if (!buffer) {
        throw new Error(`Getting buffer from stream error!`)
      }

      return uploadBuffer(buffer, readableStream.filename, Bucket)
    } else {
      return uploadNoImage(readableStream, Bucket)
    }
  } catch (error) {
    throw new Error(`Uploading file error: ${error.message}`)
  }
}

export const deleteFile = async (path: string, Bucket: string) => {
  try {
    await deleteFileBucket(getKeyPath(path), Bucket)
  } catch (error) {
    throw new Error(`Deleting file error: ${error.message}`)
  }
}

export const updateFile = async (path: string, file: any, Bucket: string) => {
  try {
    await deleteFile(path, Bucket)
    return uploadFile(file, Bucket)
  } catch (error) {
    throw new Error(`Updating file error: ${error.message}`)
  }
}
