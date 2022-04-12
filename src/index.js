import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PoemCards from "./pages/PoemCards";
import PageNotFound from "./pages/PageNotFound";
import Poem from "./pages/Poem";
import Navbar from "./components/Navbar";
import "./assets/styles/app.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="poems" element={<PoemCards />} />
      <Route path="poems/:poemId" element={<Poem />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
