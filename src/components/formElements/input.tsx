import React from "react";

interface ISearchProps {
  value?: string;
  onChange: (value: any) => void;
}

export function SearchInputFull(props: ISearchProps) {
  return (
    <div className="G-width-100 G-mb-35 P-input P-input-search-full-screen G-position-relative">
      <i className="icon-search-16"></i>
      <input
        name="search"
        type="text"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
}
