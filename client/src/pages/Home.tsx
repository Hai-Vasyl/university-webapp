import React, { useEffect } from "react"
import { GET_NEWS_EVENTS_DETAILED } from "../fetching/queries"
import { useQuery } from "@apollo/client"
import { access } from "../modules/accessModifiers"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import Carousel from "../components/Carousel"
// @ts-ignore
import styles from "../styles/pages.module"
import { INewsEventSlider } from "../interfaces"
import NewsSlide from "../components/NewsSlide"
import AboutModule from "../components/AboutModule"
import GalleryModule from "../components/GalleryModule"

const Home: React.FC = () => {
  const {
    auth: { user },
  } = useSelector((state: RootStore) => state)
  const { data: dataNews, loading: loadNews } = useQuery(
    GET_NEWS_EVENTS_DETAILED,
    {
      variables: {
        search: "",
        type: "news",
        category: null,
        dateFrom: null,
        dateTo: null,
        from: 0,
        to: 4,
      },
      // fetchPolicy: "cache-and-network",
    }
  )

  const news = dataNews ? dataNews.getNewsEvents.items : []
  const isOwnerContent =
    user.role === access.admin.keyWord || user.role === access.teacher.keyWord

  return (
    <div className='container'>
      <div
        className={`${styles.page__carousel} ${
          !news.length && styles.page__carousel__minimize
        }`}
      >
        <Carousel
          slides={news}
          load={loadNews}
          isOwnerContent={isOwnerContent}
          content=''
          type=''
          noImage
        >
          {(params: any) =>
            news.map((item: INewsEventSlider, index: number) => {
              return (
                <NewsSlide
                  key={item.id}
                  info={item}
                  index={index}
                  params={params}
                />
              )
            })
          }
        </Carousel>
      </div>
      <AboutModule />
      <GalleryModule />
    </div>
  )
}

export default Home
