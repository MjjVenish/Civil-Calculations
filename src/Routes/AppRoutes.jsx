import React from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../container/PageWrapper";
import Construction from "../pages/Construction";
import CementCalci from "../pages/CementCalci";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageWrapper>
            <Construction />
          </PageWrapper>
        }
      />
      <Route
        path="/Cement-Concrete-Calculator"
        element={
          <PageWrapper>
            <CementCalci />
          </PageWrapper>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
