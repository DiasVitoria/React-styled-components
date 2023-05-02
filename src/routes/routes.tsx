import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Megasena } from "../pages/Megasena";
import { Quina } from "../pages/Quina";
import { Timemania } from "../pages/Timemania";

export const Caminhos = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/megasena" element={<Megasena />} />
        <Route path="/timemania" element={<Timemania />} />
        <Route path="/quina" element={<Quina />} />
      </Routes>
    </BrowserRouter>
  );
};
