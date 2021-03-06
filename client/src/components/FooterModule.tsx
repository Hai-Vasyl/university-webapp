import React from "react"
import { Link } from "react-router-dom"
// @ts-ignore
import styles from "../styles/pages.module"
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa"

const FooterModule: React.FC = () => {
  const socialLinks = [
    {
      to: "https://www.facebook.com/nulpippt/",
      Icon: FaFacebook,
      title: "Facebook",
    },
    {
      to: "#",
      Icon: FaInstagram,
      title: "Instagram",
    },
    {
      to: "https://www.youtube.com/watch?v=PjKJV1tBfV4&t=1s",
      Icon: FaYoutube,
      title: "YouTube",
    },
    {
      to: "#",
      Icon: FaTelegram,
      title: "Telegram",
    },
  ]

  const links = {
    stack_1: [
      {
        to: "/",
        title: "Головна",
      },
      { to: "/about", title: "Про Iнститут" },
      { to: "/schedule-session", title: "Розклад Сесії" },
      {
        to: "/discover",
        title: "Шукати",
      },
      { to: "/team", title: "Команда" },
    ],
    stack_2: [
      {
        to: "/entrant",
        title: "Вступнику",
      },
      {
        to: "/news",
        title: "Новини",
      },
      {
        to: "/events",
        title: "Події",
      },
      {
        to: "/gallery",
        title: "Галерея",
      },
      { to: "/graduates", title: "Випускники", },
    ],
    stack_3: [
      {
        to: "/management",
        title: "Управління",
      },
      {
        to: "/projects",
        title: "Проекти",
      },
      {
        to: "/contacts",
        title: "Контакти",
      },
      {
        to: "/schedule",
        title: "Розклад Занять",
      },
    ],
  }

  const reduceMapLinks = (
    native: boolean,
    links: { title: string; to: string; Icon?: any }[]
  ) => {
    return links.map((item) => {
      if (native) {
        return (
          <Link to={item.to} className={styles.footer_link} key={item.title}>
            {item.title}
          </Link>
        )
      }
      return (
        <a className={styles.footer_link} key={item.title} href={item.to}>
          <item.Icon className={styles.footer_link__icon} />
          <span>{item.title}</span>
        </a>
      )
    })
  }

  return (
    <div className={styles.module_footer}>
      <div className={styles.module_footer__border}></div>
      <div className={`wrapper ${styles.module_footer__flex}`}>
        <div className={styles.module_footer__logo_container}>
          <Link to='/' className={styles.module_footer__logo}>
            <img
              src='https://university-upload-bucket.s3.eu-central-1.amazonaws.com/logo_clear.png'
              alt='logoImg'
            />
          </Link>
        </div>
        <div className={styles.module_footer__links}>
          <div className={styles.module_footer__title}>Швидкі посилання</div>
          <div className={styles.module_footer__section_links}>
            <div className={styles.module_footer__subsection}>
              {reduceMapLinks(true, links.stack_1)}
            </div>
            <div className={styles.module_footer__subsection}>
              {reduceMapLinks(true, links.stack_2)}
            </div>
            <div className={styles.module_footer__subsection}>
              {reduceMapLinks(true, links.stack_3)}
            </div>
          </div>
        </div>
        <div className={styles.module_footer__socials}>
          <div className={styles.module_footer__title}>Слідкуйте за нами</div>
          <div className={styles.module_footer__subsection}>
            {reduceMapLinks(false, socialLinks)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterModule
