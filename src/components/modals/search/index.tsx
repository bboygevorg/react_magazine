import React, { useState } from "react";
import "../style.scss";
import "./styles.scss";
import Logo from "../../../assets/svg/sunCover.svg";
import { SearchInputFull } from "../../formElements";
import { Products } from "./products";
import { IProductModel } from "../../../platform/api/products/res/product-models";

interface IModal {
  show: boolean;
  close: () => void;
}

export const SearchModal = (props: IModal) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<IProductModel[]>([]);

  return (
    <div className="P-modal">
      <div
        className="P-modal-cover"
        onClick={props.close}
        style={props.show ? { display: "block" } : { display: "none" }}
      ></div>
      <div
        className="P-modal-wrapper P-modal-search-wrapper G-bg-white"
        style={{
          transform: props.show ? "translateY(0%)" : undefined,
          top: props.show ? "0" : "-60%",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="P-search-content">
          <img className="P-logo-img" src={Logo} alt="logo" />
          <SearchInputFull
            value={search}
            onChange={(value) => {
              setSearch(value);
            }}
          />
          {props.show && search && (
            <Products
              onClick={() => {
                props.close();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
