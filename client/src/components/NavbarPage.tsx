import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { access } from "../modules/accessModifiers";
import ButtonMenu from "./ButtonMenu";
// @ts-ignore
import styles from "../styles/pages.module";
import ButtonTab from "./ButtonTab";
import { BsX, BsPlus } from "react-icons/bs";

interface INavbarPageProps {
  sectionLinks: { title: string; id: string }[];
  activeSection: string;
  onCreate(): any;
  toggle: boolean;
}

const NavbarPage: React.FC<INavbarPageProps> = ({
  sectionLinks,
  activeSection,
  onCreate,
  toggle,
}) => {
  const {
    auth: { user },
  } = useSelector((state: RootStore) => state);

  return (
    <div className={styles.navbar}>
      <div className={`wrapper ${styles.navbar__menu}`}>
        {sectionLinks.length > 1 && (
          <ButtonMenu links={sectionLinks} active={activeSection} />
        )}
        {user.role === access.admin.keyWord && (
          <div className={styles.navbar__create}>
            <p>Створити розділ</p>
            <ButtonTab click={onCreate} Icon={toggle ? BsX : BsPlus} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarPage;
