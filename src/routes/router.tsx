import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageTimemania, PageMegasena, PageQuina } from "../pages";
import { Menu } from "../components/menu";

export const LoteriaRoutes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/timemania" element={<PageTimemania />} />
        <Route path="/megasena" element={<PageMegasena />} />
        <Route path="/quina" element={<PageQuina />} />
      </Routes>
    </BrowserRouter>
  );
};