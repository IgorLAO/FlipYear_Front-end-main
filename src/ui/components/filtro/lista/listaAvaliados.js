import { useEffect } from "react";
import { useState } from "react";

export default function OrdenaçãoAvaliados({OrdMelhoresAvaliados, OrdPioresAvaliados}){

    const [selecX, setSelecX] = useState(false);
    const [buttonFundo, setButtonFundo] = useState('');
    const [buttonFonte, setButtonFonte] = useState('');
   

    function Selecionado() {

        setSelecX((current) => !current);

        if (selecX == false) {

            setButtonFonte('white');
            setButtonFundo('#413E3E');


        }

        else {

            setButtonFonte('');
            setButtonFundo('');


        }



    }

    const getInitialState = () => {
        const value = "Melhores Avaliados";
        return value;
      };

      const [value, setValue] = useState(getInitialState);

      const handleChange = (e) => {

        setValue(e.target.value);

        if(value == 'Melhores Avaliados'){

            OrdMelhoresAvaliados();


        }

        else{

            OrdPioresAvaliados();


        }

       
      };


    return(

        <>
        
        <select className='empresa'
        value={value}
         style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}` }} 
         onClick={Selecionado} 
         onChange={handleChange}>

                <option>Melhores Avaliados</option>
                <option>Piores Avaliados</option>


            </select>

        
        </>






    )




}