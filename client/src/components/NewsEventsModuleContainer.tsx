import React from "react";
import { GET_NEWS_EVENTS_DETAILED } from "../fetching/queries";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";

interface INewsEventsModuleContainerProps {
  isNews: boolean;
  exceptId?: string;
  from?: number;
  children: any;
}

const NewsEventsModuleContainer: React.FC<INewsEventsModuleContainerProps> = ({
  isNews,
  exceptId,
  from = 0,
  children,
}) => {
  const {
    configs: { lang },
  } = useSelector((state: RootStore) => state);

  const { data: newsEvents, loading } = useQuery(GET_NEWS_EVENTS_DETAILED, {
    variables: {
      search: "",
      type: isNews ? "news" : "event",
      category: null,
      dateFrom: null,
      dateTo: null,
      from: from,
      to: 3,
      exceptId,
      lang: lang === "uk" ? undefined : lang,
    },
  });

  const items = newsEvents ? newsEvents.getNewsEvents.items : [];
  return <>{children(items, loading, isNews)}</>;
};

export default NewsEventsModuleContainer;
