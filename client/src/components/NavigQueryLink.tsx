import React from "react"
import { Link } from "react-router-dom"
// @ts-ignore
import styles from "../styles/navbar.module.scss"
import { RESET_TOGGLE } from "../redux/toggle/toggleTypes"
import { useDispatch } from "react-redux"

interface INavigQueryLinkProps {
  to: string
  title: string
  dropdown?: boolean
  Icon?: any
  isMatch: boolean
}

const NavigQueryLink: React.FC<INavigQueryLinkProps> = ({
  to,
  title,
  dropdown,
  Icon,
  isMatch,
}) => {
  const dispatch = useDispatch()

  return (
    <Link
      onClick={() => dispatch({ type: RESET_TOGGLE })}
      to={to}
      className={`${styles.link} ${dropdown && styles.link__dropdown_menu} ${
        isMatch && styles.link__active
      }`}
    >
      {Icon && <Icon className={styles.link__text_icon} />}
      <span className={styles.link__text}>{title}</span>
    </Link>
  )
}

export default NavigQueryLink
