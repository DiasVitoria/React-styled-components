export interface ThemeProps {
  theme: Theme;
  setTheme: any;
}

export interface Theme {
  nome: string,
  acumulou: string,
  data: string,
  estimativa: string,
  loteria: string,
  bola: string,
  bolafonte: string,
  logo: any
}

export interface loteriaProps {
    megasena: Props;
    timemania: Props;
    quina: Props;
    carregando: boolean;
  }

export interface Props {
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: number;
    valorPremio: number;
  }