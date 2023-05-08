import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../components/menu";
import { Megasena, Quina, Timemania } from "../pages";

export const LoteriaRoutes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/timemania" element={<Timemania />} />
        <Route path="/megasena" element={<Megasena />} />
        <Route path="/quina" element={<Quina />} />
      </Routes>
    </BrowserRouter>
  );
};