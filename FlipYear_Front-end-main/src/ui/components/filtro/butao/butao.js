import './butao.scss';
import { useState } from 'react';


export default function Butao(props){

    const [selecX, setSelecX] = useState(false);
    const [buttonFundo, setButtonFundo] = useState('');
    const [buttonFonte, setButtonFonte] = useState('');

    function Selecionado(){

        setSelecX((current) => !current);

        if(selecX == false){
            setButtonFonte('white');
            setButtonFundo('#413E3E');

        }

        else{
            setButtonFonte('');
            setButtonFundo('');

        }

    }



    return(
        <button className='opc' onClick={Selecionado}
                style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}`}}>
                    {
                        (selecX == true)

                        ?<p className='selec-x'>X</p>

                        :<></>
                    }

                    <p>{props.item}</p>
                </button>

    )



}