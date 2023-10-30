import React from "react";
import "./style/App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RedirectPage from "./components/RedirectPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/redirect-page" element={<RedirectPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
