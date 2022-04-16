import { Routes, Route, HashRouter } from "react-router-dom";
import { Home, PageNotFound, Poem, PoemCards } from "./pages";
import { Navbar, Footer } from "./components/";
import { Container } from "@mui/material";

export default function App() {
  return (
    <Container fixed>
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="poems" element={<PoemCards />} />
          <Route path="poems/:collection" element={<PoemCards />} />
          <Route path="poem/:poemId" element={<Poem />} />
          <Route path="poem/:collection/:poemId" element={<Poem />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
      <Footer />
    </Container>
  );
}
