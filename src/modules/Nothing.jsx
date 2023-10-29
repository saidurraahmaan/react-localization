import React, { useState } from "react";
import { Trans } from "react-i18next";

const Nothing = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    search: "",
  });
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  console.log({ formData });
  return (
    <div style={{ textAlign: "center", marginTop: "16px" }}>
      <div style={{ marginBlock: "16px" }}>
        <input
          value={formData.search}
          placeholder="search"
          onChange={(e) => handleChange("search", e.target.value)}
        />
      </div>
      <div style={{ marginBlock: "16px" }}>
        <input
          value={formData.name}
          placeholder="name"
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div style={{ marginBlock: "16px" }}>
        <input
          value={formData.age}
          type="number"
          placeholder="age"
          onChange={(e) => handleChange("age", +e.target.value)}
        />
      </div>
      <div>
        <Trans i18nKey={"details"}></Trans>
      </div>
    </div>
  );
};

export default Nothing;
