import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, PageNotFound, Poem, PoemCards } from "./pages";
import Navbar from "./components/Navbar";

export default function App() {
  return (
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
}
