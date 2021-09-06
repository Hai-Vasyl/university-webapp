import React from "react"
import LayoutTabs from "../components/LayoutTabs"
import {RootStore} from "../redux/store"
import {useSelector} from "react-redux"
import { useLocation } from "react-router"

const Management: React.FC = () => {
  const location = useLocation()
  const {configs: {current}} = useSelector((state: RootStore) => state)
  return <LayoutTabs title={current.pageTitles[location.pathname]} imgsPrivate />
}

export default Management
