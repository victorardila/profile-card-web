import React from "react";
import "../card/CardPresentation";
import "./LayoutApp.style.css";
import CardPresentation from "../card/CardPresentation";
import Header from "../header/Header";

const LayoutApp = () => {
  return (
    <div className="layout-app">
      <Header />
      <div className="layout-app-content">
        <CardPresentation />
      </div>
    </div>
  );
};

export default LayoutApp;
