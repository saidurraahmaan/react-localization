import React from "react";
import { useTranslation } from "react-i18next";
import Welcome from "./Welcome";
import Mycomponent from "./Mycomponent";

const Page = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div>
      <Welcome />
      <button type="button" onClick={() => changeLanguage("bd")}>
        bd
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        en
      </button>

      <div className="App-intro">
        <Mycomponent />
      </div>
      <div>{t("description.part2")}</div>
    </div>
  );
};

export default Page;
