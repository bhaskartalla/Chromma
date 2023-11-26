import React, { useState } from "react";
import Inputbox from "uiKit/Inputbox/inputbox";
import style from "./global_search.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const GlobalSearch = () => {
  const [searchParams] = useSearchParams("");
  const [searchText, setSearchText] = useState(searchParams.get("searchText"));
  const navigate = useNavigate();

  const handleTextChange = (text) => {
    setSearchText(text);
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/product-listing?query=${searchText}`);
    }
  };

  return (
    <div className={style.global_search_wrapper}>
      <div className={style.inputbox_wrapper}>
        <Inputbox
          value={searchText}
          isDarkThemed={false}
          placeholder={`Search `}
          onChange={handleTextChange}
          setFocus={true}
          onKeyDown={handleOnKeyDown}
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
