import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Duolingo from "./layout/Duolingo";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Applicant from "./layout/Applicant";
import { ThemeProvider, createTheme } from "@mui/material";
import AcceptingInstitute from "./views/applicant/testtakers/AcceptingInstitute";
import Stories from "./views/applicant/testtakers/Stories";
import routes from "./routes";
import SelectTest from "./views/checkout/SelectTest/SelectTest";
import TestAmount from "./views/checkout/TestAmount/TestAmount";
import { FastResult } from "./views/checkout/TestAmount/FastResult";
import DeliveryTest from "./views/checkout/DeliveryTest/DeliveryTest";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Example breakpoint value
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
const App = () => {
  const getRoute = (routes) => {
    return routes.map((item, index) => {
      if (item.layout === "/duolingo") {
        console.log(item.layout + item.path);
        console.log(item.component);
        return (
          <Route
            key={index}
            path={item.layout + item.path}
            element={<item.component />}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/auth/login" element={<Login />} />
            <Route exact path="/auth/register" element={<Register />} />
            <Route exact path="/duolingo/home" element={<Duolingo />} />
            <Route exact path="/duolingo/applicants" element={<Applicant />} />
            <Route
              exact
              path="/duolingo/test_takers/accepting_institution"
              element={<AcceptingInstitute />}
            />
            <Route exact path="/test_takers/stories" element={<Stories />} />
            {getRoute(routes)}
            <Route exact path="/duolingo/checkout">
              <Route
                exact
                path="/duolingo/checkout/select"
                element={<SelectTest />}
              />
              <Route
                exact
                path="/duolingo/checkout/delivery"
                element={<DeliveryTest />}
              />
              <Route
                exact
                path="/duolingo/checkout/pay"
                element={<TestAmount />}
              />
            </Route>
            <Route
              exact
              path="/duolingo/pay"
              element={<Navigate to="/duolingo/checkout/select" />}
            />
            <Route
              exact
              path="/*"
              element={<Navigate to="/duolingo/applicants" />}
            />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};

export default App;
