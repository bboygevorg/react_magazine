import React, { Suspense } from "react";
// I18nPropvider
// StateContext.Provider
import { Routes, Route } from "react-router-dom";
import Paths from "./paths";
import Home from "../modules/container/home/home";
import Layout from "../modules/layouts/layout";

const RoutContainer = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>hello</h1>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RoutContainer;
