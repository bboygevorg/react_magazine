import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Header from "../header/header";

const Layout = () => {
  const [successToLoad, setSuccessToLoad] = useState(true);

  return successToLoad ? (
    <main>
      {/* <ToastContainer /> */}
      {/* AuthModal */}
      <Header />
      <Outlet />
      <div>outlet</div>
    </main>
  ) : (
    <div>loading</div>
  );
};

export default Layout;
