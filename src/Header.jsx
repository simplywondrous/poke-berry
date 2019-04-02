import React from "react";

// Makes more sense to make one large image and tile it so resizing doesn't change it
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-img" />
      {/* <img alt="banner" src="curtain.png" /> */}
    </div>
  );
};

export default Header;
