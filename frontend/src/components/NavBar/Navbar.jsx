import React, { useState } from "react";
import style from "./navbar.module.css";
const Navbar = React.memo(() => {
  return (
    <>
      <div className={style.navbarContainer}>
        <div className={style.navbarLeftSide}>
          Amrutvahini Financial Services
        </div>
        <div className={style.navbarRightSide}>
          <button className={style.logoutButton}>Logout</button>
        </div>
      </div>
    </>
  );
});

export default Navbar;
