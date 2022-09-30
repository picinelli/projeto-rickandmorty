import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataContext from "../providers/DataContext";
import { ToastContainer } from "react-toastify";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Router() {
  const [data, setData] = useState({
    API: process.env.REACT_APP_BASE_URL,
    token: null,
    user: {},
  });

  return (
    <>
      <ToastContainer />
      <DataContext.Provider value={{ data, setData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}
