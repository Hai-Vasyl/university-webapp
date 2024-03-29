import React, { useEffect, useState, useRef } from "react"
import { RootStore } from "../redux/store"
import { Link, useHistory, useLocation } from "react-router-dom"
import { BsSearch, BsCaretRightFill } from "react-icons/bs"
import { AiOutlineLogout } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { MdBlurOn, MdBlurOff } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import {
  AUTHFORM_TOGGLE,
  RESET_TOGGLE,
  NAVBAR_TOGGLE,
  NAVBAR_RESET,
} from "../redux/toggle/toggleTypes"
// @ts-ignore
import styles from "../styles/navbar.module"
import NavigLink from "./NavigLink"
import NavigQueryLink from "./NavigQueryLink"
// @ts-ignore
import stylesBtn from "../styles/button.module"
import { ILink } from "../interfaces"
import UserAva from "./UserAva"
import { RESET_AUTH } from "../redux/auth/authTypes"
import {
  CHANGE_LANGUAGE_CONFIG,
  Languages,
} from "../redux/configs/configsTypes"
import ButtonTab from "./ButtonTab"
import ButtonPicker from "./ButtonPicker"
import useRoutes from "../hooks/useRoutes"

const Navbar: React.FC = () => {
  const history = useHistory()
  const location = useLocation()

  const {
    auth: { user, token },
    toggle: { authForm, navbar },
    configs: { lang },
  } = useSelector((state: RootStore) => state)

  const [blur, setBlur] = useState(true)
  const [search, setSearch] = useState("")
  const [changeNav, setChangeNav] = useState(false)
  const dispatch = useDispatch()

  const { links, linksResponsive } = useRoutes()

  const optionsLanguage = [
    { label: "EN", value: "en" },
    { label: "UK", value: "uk" },
  ]

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  useEffect(() => {
    const toggleBlur = JSON.parse(localStorage.getItem("blur") || "{}")
    const blurValue = toggleBlur?.toggle

    if (toggleBlur && typeof blurValue === "boolean") {
      setBlur(blurValue)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("blur", JSON.stringify({ toggle: blur }))
  }, [blur])

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar)
    return () => {
      window.removeEventListener("scroll", changeNavbar)
    }
  })

  useEffect(() => {
    dispatch({ type: NAVBAR_RESET })
  }, [changeNav, dispatch])

  const changeNavbar = () => {
    if (window.scrollY > 80) {
      setChangeNav(true)
    } else {
      setChangeNav(false)
    }
  }

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (search.trim()) {
      history.push(`/discover?tags=all&search=${search}`)
    }
  }

  const handleLogout = () => {
    dispatch({ type: RESET_TOGGLE })
    dispatch({ type: RESET_AUTH })
  }

  const handleClickLink = () => {
    dispatch({ type: RESET_TOGGLE })
  }

  const handleChangeLanguage = ({ target }: any) => {
    dispatch({ type: CHANGE_LANGUAGE_CONFIG, payload: target.value })
  }

  const reduceMapLins = (links: ILink[]) => {
    return links.map(({ to, exact, title, extraLinks }) => {
      if (extraLinks) {
        return (
          <div key={title} className={styles.link__wrapper_dropdown}>
            <Link
              to={to || ""}
              className={`${styles.link} ${styles.link__drop}`}
              onClick={handleClickLink}
            >
              <span className={styles.link__text}>{title}</span>
              <BsCaretRightFill className={styles.link__icon} />
            </Link>
            <div className={styles.link__dropdown}>
              {extraLinks.map((link: ILink) => {
                return (
                  <NavigQueryLink
                    key={link.to}
                    title={link.title}
                    isMatch={
                      link.to === `${location.pathname}${location.search}`
                    }
                    dropdown
                    to={link.to || ""}
                  />
                )
              })}
            </div>
          </div>
        )
      }
      return (
        <NavigLink key={title} title={title} exact={!!exact} to={to || ""} />
      )
    })
  }

  const linksResp = linksResponsive.map((link: ILink) => {
    return (
      <NavigLink
        key={link.to}
        title={link.title}
        exact={!!link.exact}
        dropdown
        to={link.to || ""}
      />
    )
  })

  return (
    <div className={`${styles.menu} ${changeNav && styles.menu__reduce}`}>
      <div className={`${styles.nav} ${blur && styles.nav__blur}`}>
        <div className={styles.nav__border}></div>
        <div className={styles.nav__actions_wrapper}>
          <div className={styles.nav__actions}>
            <Link
              to='/'
              className={styles.nav__logo}
              onClick={() => dispatch({ type: RESET_TOGGLE })}
            >
              <img
                src='https://university-upload-bucket.s3.eu-central-1.amazonaws.com/logo.jpg'
                className={styles.nav__logo_img}
                alt='logotype'
              />
            </Link>
            <div className={styles.nav__title}>
              <Link to='/' onClick={() => dispatch({ type: RESET_TOGGLE })}>
                Інститут просторового планування
                <br />
                та перспективних технологій
              </Link>
            </div>
            <ButtonTab
              exClass={`${stylesBtn.btn_tab_glass} ${styles.nav__btn_blur}`}
              click={() => setBlur((prev) => !prev)}
              Icon={blur ? MdBlurOn : MdBlurOff}
            />
            <ButtonTab
              exClass={`${stylesBtn.btn_tab_glass} ${styles.nav__btn_search}`}
              click={() => history.push("/discover?tags=all")}
              Icon={BsSearch}
            />
            <form onSubmit={handleSubmitSearch} className={styles.search}>
              <input
                type='text'
                value={search}
                className={styles.search__input}
                placeholder='Пошук'
                onChange={handleChangeSearch}
              />
              <BsSearch className={styles.search__button} />
            </form>
            <ButtonPicker
              field={lang}
              options={optionsLanguage}
              change={handleChangeLanguage}
              exClass={`${stylesBtn.btn_tab_glass} ${stylesBtn.btn_option}`}
            />
          </div>
        </div>
        <div className={styles.nav__border_second}>
          <div></div>
          <div className={styles.nav__border_second__content}>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div className={styles.nav__wrapper_menu}>
          <div className={styles.nav__menu}>
            <Link
              to='/'
              className={`${styles.nav__logo_mini} ${
                changeNav && styles.nav__logo_mini__active
              }`}
              onClick={() => dispatch({ type: RESET_TOGGLE })}
            >
              <img
                src='https://university-upload-bucket.s3.eu-central-1.amazonaws.com/logo.jpg'
                className={styles.nav__logo_mini_img}
                alt='logotype'
              />
            </Link>
            <div className={styles.nav__links}>{reduceMapLins(links)}</div>
            {token.length ? (
              <div
                className={`${styles.link__wrapper_dropdown} ${styles.user}`}
              >
                <button
                  className={`${styles.user__btn} ${styles.link__drop}`}
                  onClick={() => dispatch({ type: RESET_TOGGLE })}
                >
                  <div className={styles.user__name}>
                    <span className={styles.user__firstname}>
                      {user.firstname.slice(0, 1)}
                    </span>
                    <span className={styles.user__lastname}>
                      {user.lastname.slice(0, 1)}
                    </span>
                  </div>
                  <div className={styles.user__ava}>
                    <UserAva
                      color={user.color}
                      ava={user.ava}
                      firstname={user.firstname}
                      lastname={user.lastname}
                    />
                  </div>
                </button>
                <div
                  className={`${styles.link__dropdown} ${styles.link__dropdown_right}`}
                >
                  <NavigLink
                    to={`/profile/${user.id}`}
                    title='Мій кабінет'
                    dropdown
                    Icon={BiUserCircle}
                  />
                  <button
                    className={`${styles.link} ${styles.link__dropdown_menu}`}
                    onClick={handleLogout}
                  >
                    <AiOutlineLogout className={styles.link__text_icon} />
                    <span className={styles.link__text}>Вийти</span>
                  </button>
                </div>
              </div>
            ) : (
              <button
                className={`${styles.btn_login} ${
                  authForm && styles.btn_login__active
                }`}
                onClick={() => dispatch({ type: AUTHFORM_TOGGLE })}
              >
                <span className={styles.btn_login__text}>Увійти</span>
              </button>
            )}
            <button
              onClick={() => dispatch({ type: NAVBAR_TOGGLE })}
              className={`${styles.btn_menu} ${
                navbar && styles.btn_menu__cross
              }`}
            >
              <span className={styles.btn_menu__lines}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${styles.respns_menu} ${
          navbar && styles.respns_menu__open
        } `}
      >
        <div className={styles.respns_menu__container}>{linksResp}</div>
      </div>
    </div>
  )
}

export default Navbar
