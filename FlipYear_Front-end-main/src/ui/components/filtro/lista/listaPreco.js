import { useEffect } from "react";
import { useState } from "react";


export default function OrdenacaoPreco({OrdMaioresPrecos, OrdMenoresPrecos}){

    const [selecX, setSelecX] = useState(false);
    const [buttonFundo, setButtonFundo] = useState('');
    const [buttonFonte, setButtonFonte] = useState('');


    const getInitialState = () => {
        const value = "Maiores Preços";
        return value;
      };

      const [value, setValue] = useState(getInitialState);

      const handleChange = (e) => {

        setValue(e.target.value);

        if(value == 'Maiores Preços'){

            OrdMaioresPrecos();

        }

        else if(value == 'Menores Preços'){

            OrdMenoresPrecos();

        }

       
      };

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


        return(

            <select 
            value={value}
            className='empresa' style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}` }} 
            onClick={Selecionado}
            onChange={handleChange}>

                <option>Maiores Preços</option>
                <option>Menores Preços</option>


            </select>
        )



}