import { Theme } from "../types";
import logotimemania from "../assets/trevo-timemania.png";
import logomegasena from "../assets/trevo-megasena.png";
import logoquina from "../assets/trevo-quina.png";

const megasenaTheme: Theme = {
    nome: "Megasena",
    acumulou: "#0066b3",
    data: "#4c556c",
    estimativa: "#209869",
    loteria: "#209869",
    bola: "#209869",
    bolafonte: "#fff",
    logo: logomegasena
};

const quinaTheme: Theme = {
    nome: "Quina",
    acumulou: "#0066b3",
    data: "#4c556c",
    estimativa: "#260085",
    loteria: "#260085",
    bola: "#260085",
    bolafonte: "#fff",
    logo: logoquina
};

const timemaniaTheme: Theme = {
    nome: "Timemania",
    acumulou: "#0066b3",
    data: "#4c556c",
    estimativa: "#00ff48",
    loteria: "#00ff48",
    bola: "#FFF600",
    bolafonte: "#049645",
    logo: logotimemania
};

export { timemaniaTheme, megasenaTheme, quinaTheme };