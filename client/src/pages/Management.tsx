import React, { useEffect, useState } from "react"
import { GET_PAGE_SECTIONS } from "../fetching/queries"
import { useQuery } from "@apollo/client"
import Title from "../components/Title"
// @ts-ignore
import styles from "../styles/pages.module"
import { useLocation } from "react-router-dom"
import Loader from "../components/Loader"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import { access } from "../modules/accessModifiers"
import { IPageSection } from "../interfaces"
import PageSection from "../components/PageSection"
import ModSectionForm from "../components/ModSectionForm"
import NewsEventsModule from "../components/NewsEventsModule"
import NavbarPage from "../components/NavbarPage"
import SectionAbout from "../components/SectionAbout"
import SideNavbar from "../components/SideNavbar"
import LayoutTabs from "../components/LayoutTabs"

const Management: React.FC = () => {
  // const [activeSection, setActiveSection] = useState("")
  // const { pathname } = useLocation()
  // const {
  //   auth: { user },
  // } = useSelector((state: RootStore) => state)

  // const {
  //   data: dataSections,
  //   loading: loadSections,
  //   refetch: refetchSections,
  // } = useQuery(GET_PAGE_SECTIONS, {
  //   variables: {
  //     filters: [],
  //     from: 0,
  //     url: pathname,
  //   },
  // })
  // const [toggleCreate, setToggleCreate] = useState(false)

  // useEffect(() => {
  //   const data = dataSections && dataSections.getPageSections
  //   if (data) {
  //     setActiveSection(data.items[0].title)
  //   }
  // }, [dataSections])

  // const handleRefetchAll = () => {
  //   refetchSections()
  // }

  // const handleCreate = () => {
  //   handleRefetchAll()
  //   setToggleCreate((prev) => !prev)
  // }

  // const sections = dataSections ? dataSections.getPageSections.items : []
  // const links = sections ? sections.map((item: IPageSection) => item.title) : []

  // const sectionsJSX =
  //   sections &&
  //   sections.map((section: IPageSection) => {
  //     return (
  //       <div
  //         className={
  //           activeSection === section.title
  //             ? styles.section__active
  //             : styles.section__close
  //         }
  //         key={section.id}
  //       >
  //         <PageSection
  //           info={section}
  //           filters={[]}
  //           onDelete={handleRefetchAll}
  //           onEdit={handleRefetchAll}
  //           isOptContent
  //         >
  //           <SectionAbout
  //             info={section}
  //             onCreate={refetchSections}
  //             onEdit={refetchSections}
  //             onRemove={refetchSections}
  //             privateType
  //             isOwnerContent={user.role === access.admin.keyWord}
  //           />
  //         </PageSection>
  //       </div>
  //     )
  //   })

  // return (
  //   <div className='container'>
  //     <Title title='Управління' />
  //     <NavbarPage
  //       sectionLinks={links}
  //       setActiveSection={setActiveSection}
  //       activeSection={activeSection}
  //       onCreate={() => setToggleCreate((prev) => !prev)}
  //       toggle={toggleCreate}
  //     />
  //     {user.role === access.admin.keyWord && toggleCreate && (
  //       <ModSectionForm onCreate={handleCreate} isOptContent />
  //     )}
  //     <div className='wrapper'>
  //       {loadSections ? (
  //         <Loader />
  //       ) : sections.length ? (
  //         <div className={styles.page_wrapper_flex}>
  //           <SideNavbar
  //             links={links}
  //             active={activeSection}
  //             setActive={setActiveSection}
  //             exClass={styles.page_wrapper_flex__sidebar}
  //           />
  //           <div className={styles.page_wrapper_flex__content}>
  //             {sectionsJSX}
  //           </div>
  //         </div>
  //       ) : (
  //         <div className='plug-text'>Порожньо</div>
  //       )}
  //     </div>
  //     <NewsEventsModule isNews={true} />
  //   </div>
  // )
  return <LayoutTabs title='Управління' imgsPrivate />
}

export default Management
