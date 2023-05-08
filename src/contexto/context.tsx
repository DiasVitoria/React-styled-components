import { createContext, useEffect, useState } from "react";
import { Carregando } from "../components/carregando";
import loterias from "../services/loterias";
import { loteriaProps, Props } from "../types";

const Contexto = createContext({} as loteriaProps);

function Provider({ children }:any) {
    const [megasena,setMegasena] = useState({} as Props)
    const [timemania,setTimemania] = useState({} as Props)
    const [quina,setQuina] = useState({} as Props)
    const [carregando,setCarregando] = useState(true)
    
    useEffect(() => {
        (
        async () => {
            const resp = await loterias.get()
            setMegasena(resp.megasena);
            setTimemania(resp.timemania);
            setQuina(resp.quina)
            setCarregando(false);
        })();
    },[])

      const CheckCarregando = () => {
        if(carregando){
          return <Carregando />
        }else{
          return <>{children}</>
        }
      }

    return (
        <Contexto.Provider value={{ megasena, timemania, quina, carregando }}>
            <CheckCarregando />
        </Contexto.Provider>
    );
}

export { Contexto, Provider };