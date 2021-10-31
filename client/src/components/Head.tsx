import React from "react";
// @ts-ignore
import { Helmet } from "react-helmet";

interface IHeadProps {
  title: string;
  description?: string;
}

const Head: React.FC<IHeadProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default Head;
