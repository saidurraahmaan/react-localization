import React from "react";
import { useTranslation } from "react-i18next";




const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("title")}</h2>
    </div>
  );
};

export default Welcome;
