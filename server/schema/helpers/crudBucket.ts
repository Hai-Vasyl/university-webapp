import sharp from "sharp"
import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"
import * as Sentry from "@sentry/node"
// @ts-ignore
import imagemin from "imagemin"
// @ts-ignore
import mozjpeg from "imagemin-mozjpeg"

const convertToJpg = async (input: Buffer) => {
  return sharp(input).jpeg().toBuffer()
}

export const uploadBuffer = async (buffer: Buffer, location: string) => {
  const miniBuffer = await imagemin.buffer(buffer, {
    plugins: [convertToJpg, mozjpeg({ quality: 90 })],
  })

  const Location = `/${location}/${uuidv4()}.jpeg`

  fs.writeFile(`./public${Location}`, miniBuffer, function (error) {
    throw new Error(`Writing file error: ${error?.message}`)
  })

  return Location
}

const getBufferFromStream = async (readableStream: any) => {
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
}

const uploadNoImage = async (readableStream: any, location: string) => {
  const stream = readableStream.createReadStream()
  const { ext } = path.parse(readableStream.filename)

  const Location = `/${location}/${uuidv4()}${ext}`
  const pathName = path.join(__dirname, `/public${Location}`)
  await stream.pipe(fs.createWriteStream(pathName))

  return Location
}

export const uploadFile = async (file: any, location: string) => {
  const readableStream = await file

  const isImage = readableStream.mimetype.split("/")[0] === "image"

  if (isImage) {
    const buffer = await getBufferFromStream(readableStream)

    if (!buffer) {
      throw new Error(`Getting buffer from stream error!`)
    }
    return uploadBuffer(buffer, location)
  }

  const Location = await uploadNoImage(readableStream, location)
  
  return Location
}

export const deleteFile = async (location: string) => {
  try {
    fs.unlinkSync(`./public${location}`)
  } catch (error) {
    throw new Error(`Deleting file error: ${error.message}`)
  }
}

export const updateFile = async (
  file: any,
  fileLocation: string
) => {
  try {
    const readableStream = await file
    const location = fileLocation.split("/")[1]

    fs.unlinkSync(`./public${fileLocation}`)

    const isImage = readableStream.mimetype.split("/")[0] === "image"

    if (isImage) {
      const buffer = await getBufferFromStream(readableStream)

      if (!buffer) {
        throw new Error(`Getting buffer from stream error!`)
      }
      return uploadBuffer(buffer, location)
    }

    const Location = await uploadNoImage(readableStream, location)

    return Location

  } catch (error) {
    throw new Error(`Updating file error: ${error.message}`)
  }
}