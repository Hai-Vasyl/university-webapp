import React from "react"
import Map from "./Map"
// @ts-ignore
import styles from "../styles/pages.module"
import { AiOutlinePhone } from "react-icons/ai"
import { BsAt } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa"

interface IContactsModuleProps {
  minimize?: boolean
}

const ContactsModule: React.FC<IContactsModuleProps> = ({
  minimize = false,
}) => {
  const contacts = [
    {
      Icon: AiOutlinePhone,
      title: "+380322636263",
      value: "380322636263",
      ref: "tel:+",
    },
    {
      Icon: BsAt,
      title: "ippt@gmail.com",
      value: "ippt@gmail.com",
      ref: "mailto:",
    },
    {
      Icon: GoLocation,
      title: "79044, м. Львів, вул. Горбачевського, 18",
      value: "_",
      ref:
        "https://www.google.com/maps/place/%D0%86%D0%9F%D0%9F%D0%A2+%D0%9D%D0%A3+%22%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BF%D0%BE%D0%BB%D1%96%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B0%22,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%86%D0%B2%D0%B0%D0%BD%D0%B0+%D0%93%D0%BE%D1%80%D0%B1%D0%B0%D1%87%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE,+18,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8283866,24.006925,17z/data=!3m1!4b1!4m5!3m4!1s0x473add7df5a9921f:0xc59052d9e18b2d4c!8m2!3d49.8283832!4d24.0091137",
    },
  ]

  return (
    <div
      className={`${styles.module_contacts} ${
        minimize && styles.module_contacts__minimized
      }`}
    >
      <div className={styles.module_contacts__flex}>
        <div className={styles.module_contacts__body}>
          <div className={styles.module_contacts__contacts}>
            <div className={styles.module_contacts__title}>
              <Link
                to='/contacts'
                className={`${styles.module__title} ${
                  minimize && styles.module__title__nolink
                }`}
              >
                Залишайся на зв'язку
              </Link>
            </div>
            <div className={styles.module_contacts__container}>
              {contacts.map((item) => {
                return (
                  <div key={item.value} className={styles.contact}>
                    <item.Icon className={styles.contact__icon} />
                    <a
                      className={styles.contact__link}
                      href={`${item.ref}${item.value}`}
                    >
                      {item.title}
                    </a>
                  </div>
                )
              })}
            </div>
            <div className={styles.module_contacts__social_media}>
              <a href='' className={styles.social}>
                <FaFacebook />
              </a>
              <a href='' className={styles.social}>
                <FaInstagram />
              </a>
              <a href='' className={styles.social}>
                <FaYoutube />
              </a>
              <a href='' className={styles.social}>
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.module_contacts__map}>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default ContactsModule
