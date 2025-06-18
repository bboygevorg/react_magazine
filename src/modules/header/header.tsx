import React, { useState } from "react";
import "./styles.scss";
import ProjectLogo from "../../assets/svg/logo.svg";
import { SearchModal } from "../../components/modals/search";

const Header = () => {
  const [searchModal, setSearchModal] = useState(true);
  return (
    <div>
      <SearchModal
        show={searchModal}
        close={() => {
          setSearchModal(false);
        }}
      />
    </div>
  );
};

export default Header;
