import React from "react";
// @ts-ignore
import styles from "../styles/pages.module";
import { useHistory, useLocation } from "react-router-dom";

interface ILink {
  title: string;
  id: string;
}

interface ISideNavbarProps {
  links?: ILink[];
  active?: string;
  exClass: string;
  children?: any;
}

const SideNavbar: React.FC<ISideNavbarProps> = ({
  links,
  active,
  exClass,
  children,
}) => {
  const history = useHistory();
  const location = useLocation();

  const handleSetActive = (value: string) => {
    history.push(`${location.pathname}?section=${value}`);
  };

  const linksJSX =
    links &&
    links.map((link: ILink) => {
      return (
        <button
          key={link.id}
          className={`${styles.side_link} ${
            active === link.id && styles.side_link__active
          }`}
          onClick={() => handleSetActive(link.id)}
        >
          {link.title}
        </button>
      );
    });

  return (
    <div className={`${styles.side_navbar} ${exClass}`}>
      {children || linksJSX}
    </div>
  );
};

export default SideNavbar;
