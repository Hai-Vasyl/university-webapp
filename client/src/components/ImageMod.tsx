import React, { useState, useEffect, useCallback } from "react"
// @ts-ignore
import styles from "../styles/form.module"
// @ts-ignore
import stylesBtn from "../styles/button.module"
import {
  CREATE_UPLOAD,
  EDIT_UPLOAD,
  DELETE_UPLOAD,
} from "../fetching/mutations"
import { GET_IMAGE } from "../fetching/queries"
import { useMutation, useQuery } from "@apollo/client"
import { SET_TOAST } from "../redux/toasts/toastsTypes"
import ButtonTab from "./ButtonTab"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import LoaderData from "./LoaderData"
import Button from "./Button"
import {
  BsPencil,
  BsPlus,
  BsArrowClockwise,
  BsTrash,
  BsX,
  BsArrowLeft,
} from "react-icons/bs"
import FieldFile from "./FieldFile"
import Field from "./Field"
import { IField, IImageDetailed } from "../interfaces"
import DragAndDropFiles from "./DragAndDropFiles"
// @ts-ignore
import imageDropArea from "../images/undraw_Images_re_0kll.svg"
import useSetErrorsFields from "../hooks/useSetErrorsFields"
import { types } from "../modules/messageTypes"
import { MODIMAGE_OPEN, MODIMAGE_CLOSE } from "../redux/toggle/toggleTypes"
import { types as uploadTypes } from "../modules/uploadTypes"

const ImageMod: React.FC = () => {
  const {
    toggle: {
      modImage: {
        content,
        toggle,
        type,
        singleImg,
        id: imageId,
        onCreate,
        onEdit,
        onRemove,
      },
    },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const [
    createUpload,
    { data: dataCreate, loading: loadCreate, error: errorCreate },
  ] = useMutation(CREATE_UPLOAD)
  const [editUpload, { data: dataEdit, loading: loadEdit }] = useMutation(
    EDIT_UPLOAD
  )
  const [deleteUpload, { data: dataDelete, loading: loadDelete }] = useMutation(
    DELETE_UPLOAD
  )
  const {
    data: dataImage,
    loading: loadImage,
    refetch: refetchImage,
  } = useQuery(GET_IMAGE, {
    variables: { imageId },
  })
  const [form, setForm] = useState<IField[]>([
    {
      param: "upload",
      type: "file",
      title: "Зображення",
      value: null,
      msg: "",
    },
    {
      param: "description",
      type: "text",
      value: "",
      title: "Заголовок",
      msg: "",
    },
    {
      param: "hashtags",
      type: "text",
      value: "",
      title: "Хештеги",
      msg: "",
    },
  ])
  const [preview, setPreview] = useState("")
  const { setErrors } = useSetErrorsFields()

  const resetForm = useCallback(() => {
    setForm((prevForm) =>
      prevForm.map((field) => {
        if (field.type === "file") {
          return { ...field, value: null, msg: "" }
        }
        return { ...field, value: "", msg: "" }
      })
    )
    setPreview("")
  }, [])

  useEffect(() => {
    if (!imageId) {
      resetForm()
    }
  }, [resetForm, imageId])

  const refreshForm = useCallback((imageData: IImageDetailed) => {
    setForm((prevForm) =>
      prevForm.map((field) => {
        if (field.param === "description") {
          return { ...field, value: imageData.description }
        } else if (field.param === "hashtags") {
          return { ...field, value: imageData.hashtags }
        } else if (field.type === "file") {
          return { ...field, value: null }
        }
        return field
      })
    )
    setPreview(imageData.location)
  }, [])

  useEffect(() => {
    const image = dataImage && dataImage.getImage
    if (image) {
      refreshForm(image)
    }
  }, [dataImage, refreshForm])

  const clearDataForm = useCallback(() => {
    setForm((prevForm) =>
      prevForm.map((field) => {
        if (field.param === "upload") {
          return { ...field, value: null }
        } else if (field.param === "hashtags") {
          return field
        } else {
          return { ...field, value: "" }
        }
      })
    )
    setPreview("")
  }, [])

  useEffect(() => {
    const dataCreateUpload = dataCreate && dataCreate.createUpload
    if (errorCreate) {
      setErrors(errorCreate.message, setForm)
      dispatch({
        type: SET_TOAST,
        payload: {
          type: types.error.keyWord,
          message: "Помилка перевірки полів форми!",
        },
      })
    } else if (dataCreateUpload) {
      clearDataForm()
      onCreate && onCreate()
      dispatch({ type: SET_TOAST, payload: dataCreateUpload })
      dispatch({ type: MODIMAGE_CLOSE })
    }
  }, [dispatch, dataCreate, clearDataForm, errorCreate])

  useEffect(() => {
    const dataEditUpload = dataEdit && dataEdit.editUpload
    if (dataEditUpload) {
      onEdit && onEdit()
      refetchImage()
      dispatch({ type: SET_TOAST, payload: dataEditUpload })
      dispatch({ type: MODIMAGE_CLOSE })
    }
  }, [dispatch, dataEdit, refetchImage])

  useEffect(() => {
    const dataDeleteUpload = dataDelete && dataDelete.deleteUpload
    if (dataDeleteUpload) {
      onRemove && onRemove()
      dispatch({ type: SET_TOAST, payload: dataDeleteUpload })
      dispatch({ type: MODIMAGE_CLOSE })
    }
  }, [dispatch, dataDelete])

  const handleSubmitForm = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()

    const [upload, description, hashtags] = form
    if (imageId) {
      editUpload({
        variables: {
          imageId: imageId,
          hashtags: type === uploadTypes.private.keyWord ? "" : hashtags.value,
          description: description.value,
          upload: upload.value,
        },
      })
    } else {
      createUpload({
        variables: {
          hashtags: type === uploadTypes.private.keyWord ? "" : hashtags.value,
          description: description.value,
          upload: upload.value,
          content,
          type,
        },
      })
    }
  }

  const afterChangeFile = (file: any) => {
    setPreview(URL.createObjectURL(file))
  }

  const handleRefreshForm = () => {
    refreshForm(dataImage && dataImage.getImage)
  }

  const handleDeleteImage = () => {
    deleteUpload({ variables: { imageId } })
  }

  const handleGoToCreateImage = () => {
    dispatch({
      type: MODIMAGE_OPEN,
      payload: {
        id: "",
        content,
        type,
        onCreate,
      },
    })
  }

  let fields: IField[] = []
  form.forEach((field) => {
    if (type === uploadTypes.private.keyWord && field.param === "hashtags") {
      return
    } else {
      fields.push(field)
    }
  })
  const fieldsJSX = fields.map((field) => {
    if (field.type === "file") {
      return (
        <FieldFile
          key={field.param}
          isImportant={!imageId}
          field={field}
          file={!!form[0].value}
          change={setForm}
          afterChange={afterChangeFile}
          numFiles={1}
        />
      )
    }
    return <Field field={field} key={field.param} change={setForm} />
  })

  return (
    <div
      className={`${styles.form} ${styles.form__extend} ${styles.form_popup} ${
        toggle && styles.form_popup__active
      }`}
    >
      <div className={styles.form__content}>
        <div className={styles.form__title}>
          {imageId && !singleImg && (
            <ButtonTab
              Icon={BsArrowLeft}
              click={handleGoToCreateImage}
              exClass={styles.form__btn_back}
            />
          )}
          <div className={styles.form__title_text}>
            {imageId ? "Редагування зображення" : "Створення зображення"}
          </div>
          <ButtonTab
            exClass={`${styles.form__btn_back} ${styles.form__btn_close}`}
            Icon={BsX}
            click={() => dispatch({ type: MODIMAGE_CLOSE })}
          />
        </div>
        <form
          className={styles.form__container_fields}
          onSubmit={handleSubmitForm}
        >
          <LoaderData
            load={loadImage || loadCreate || loadEdit || loadDelete}
          />
          <div className={styles.form__fields}>{fieldsJSX}</div>
          <button className='btn-handler'></button>
          <div className={styles.form__btns}>
            <Button
              title={imageId ? "Застосувати зміни" : "Створити зображення"}
              exClass={stylesBtn.btn_primary}
              Icon={imageId ? BsPencil : BsPlus}
              click={handleSubmitForm}
              type='button'
            />
            {imageId && (
              <>
                <Button
                  exClass={stylesBtn.btn_simple}
                  Icon={BsArrowClockwise}
                  click={handleRefreshForm}
                  type='button'
                />
                <Button
                  exClass={stylesBtn.btn_simple}
                  Icon={BsTrash}
                  click={handleDeleteImage}
                  type='button'
                />
              </>
            )}
          </div>
        </form>
      </div>
      <DragAndDropFiles
        exClass={`${styles.droparea} ${styles.form__sidebar}`}
        change={setForm}
        afterChange={afterChangeFile}
        param='upload'
      >
        <LoaderData load={loadImage} />
        {preview ? (
          <img
            className={styles.droparea__preview}
            src={preview}
            alt='imgPreview'
          />
        ) : (
          <div className={styles.droparea__plug}>
            <img
              src={imageDropArea}
              className={styles.droparea__image}
              alt='imgDropArea'
            />
            <div className={styles.droparea__container_text}>
              <div className={styles.droparea__text}>
                Перетягніть зображення
              </div>
            </div>
          </div>
        )}
      </DragAndDropFiles>
    </div>
  )
}

export default ImageMod
