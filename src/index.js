import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Construction from "./pages/Construction";
// import MainNavBar from "./components/MainNavBar";
import UserContext from "./utils/context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContext>
    <BrowserRouter>
      <Header />
      <NavBar />
      <Construction />
      {/* <MainNavBar /> */}
    </BrowserRouter>
  </UserContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
