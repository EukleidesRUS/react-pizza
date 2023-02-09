import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockSceleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={3}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#b76e1a"
  >
    <circle cx="141" cy="131" r="130" />
    <rect x="7" y="276" rx="0" ry="0" width="280" height="22" />
    <rect x="4" y="312" rx="0" ry="0" width="280" height="85" />
    <rect x="10" y="424" rx="20" ry="20" width="89" height="27" />
    <rect x="120" y="416" rx="19" ry="19" width="155" height="40" />
  </ContentLoader>
);

export default PizzaBlockSceleton;
