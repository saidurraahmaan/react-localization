import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import Page from "./modules/Page";
import Nothing from "./modules/Nothing";

const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Page />
      </div>
      <Nothing />
    </Suspense>
  );
}
