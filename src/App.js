import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Home />
    </>
  );
}

export default App;
