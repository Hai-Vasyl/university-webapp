import React, { useEffect, useState } from "react"
import { SET_AUTH, SET_USER_DATA } from "./redux/auth/authTypes"
import { useDispatch, useSelector } from "react-redux"
import Routes from "./components/Routes"
import { useLazyQuery } from "@apollo/client"
import { GET_DATA_USER } from "./fetching/queries"
import { RootStore } from "./redux/store"
// @ts-ignore
import stylesToast from "./styles/toast.module"
import { SET_TOASTS } from "./redux/toasts/toastsTypes"
import ToastInfo from "./components/ToastInfo"
import Loader from "./components/Loader"
import { CHANGE_LANGUAGE_CONFIG } from "./redux/configs/configsTypes"
import Head from "./components/Head"

const App: React.FC = () => {
  const [initLoad, setInitLoad] = useState(true)
  const {
    auth: { user },
    toasts: { toasts },
    configs: { current },
  } = useSelector((state: RootStore) => state)
  const [getUser, { data: dataUser }] = useLazyQuery(GET_DATA_USER, {
    fetchPolicy: "no-cache",
  })
  const dispatch = useDispatch()

  useEffect(() => {
    let auth = localStorage.getItem("auth") || ""
    const payload = auth && JSON.parse(auth)

    if (payload && payload.token) {
      dispatch({ type: SET_AUTH, payload: { ...payload, init: true } })
    } else {
      setInitLoad(false)
    }
  }, [dispatch])

  useEffect(() => {
    if (user.id?.length) {
      getUser({ variables: { userId: user.id } })
    }
  }, [getUser, user.id])

  useEffect(() => {
    const data = dataUser && dataUser.getUser
    if (!!data) {
      dispatch({ type: SET_USER_DATA, payload: data })
      setInitLoad(false)
    }
  }, [dataUser, dispatch])

  useEffect(() => {
    const interval = setInterval(() => {
      if (toasts?.length) {
        dispatch({ type: SET_TOASTS, payload: toasts.slice(1, toasts?.length) })
      }
    }, 2000)
    return () => {
      clearInterval(interval)
    }
  }, [toasts, dispatch])

  useEffect(() => {
    const language = localStorage.getItem("lang")
    if (language) {
      dispatch({
        type: CHANGE_LANGUAGE_CONFIG,
        payload: language,
      })
    }
  }, [])

  const { title, description } = current.page["/"]

  if (initLoad) {
    return <Loader center isLogo />
  }

  return (
    <div>
      <Head title={title} description={description} />
      <div>
        <Routes />
      </div>
      <div className={`${stylesToast.wrapper} ${stylesToast.wrapper_top}`}>
        {toasts.map((toast: any, index: number) => {
          return <ToastInfo {...toast} key={toast.message + index} />
        })}
      </div>
    </div>
  )
}

export default App
