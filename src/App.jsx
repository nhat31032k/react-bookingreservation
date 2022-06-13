import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/Home";
import logo from "./logo.svg";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Page404 from "./pages/page404/Page404";
import Login from "./pages/login/Login";
{
  /* import './App.css' */
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/list/:id" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
