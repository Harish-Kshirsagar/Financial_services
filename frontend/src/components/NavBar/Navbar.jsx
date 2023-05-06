import React, { useState } from "react";
import style from "./navbar.module.css";
const Navbar = React.memo(() => {
  return (
    <>
      <div className={style.navbarContainer}>
        Amrutvahini financial Services
      </div>
    </>
  );
});

export default Navbar;
