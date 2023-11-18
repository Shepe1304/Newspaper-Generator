import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--author">
        Website by <b>Shepe</b>
      </div>
      <div className="footer--tributes_images">
        Images by <b>hotpot.ai/art-generator</b>
      </div>
      <div className="footer--tributes_articles">
        Articles by <b>Bard.ai</b>
      </div>
      <div className="footer--publish_year">2023</div>
    </div>
  );
};

export default Footer;
