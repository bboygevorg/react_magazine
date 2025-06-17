import React from "react";
import "./styles.scss";
import ProjectLogo from "../../assets/svg/logo.svg";
import { SearchModal } from "../../components/modals/search";

const Header = () => {
  return (
    <div>
      <SearchModal />
    </div>
  );
};

export default Header;
