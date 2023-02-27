import React from "react";
import "./brand.css";

import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className="">
        <img src={google} alt="Logo Google" />
      </div>
      <div className="">
        <img src={slack} alt="Logo Slack" />
      </div>
      <div className="">
        <img src={atlassian} alt="Logo Atlassian" />
      </div>
      <div className="">
        <img src={dropbox} alt="Logo Dropbox" />
      </div>
      <div className="">
        <img src={shopify} alt="Logo Shopify" />
      </div>
    </div>
  );
};

export default Brand;
