import './valores.scss'
import { useEffect, useState } from 'react';

export default function ValoresFiltro(props){

    const {setFiltroPreco, setFiltroAvaliacao, setFiltroEstoque} = props;

    const [buttonFundo, setButtonFundo] = useState('');
    const [buttonFonte, setButtonFonte] = useState('');


    const[input1, setInput1] = useState('');
    const[input2, setInput2] = useState('');

    function setarValores(){

        let obj = {
            inicial: input1,
            final: input2
        }

        if(props.item == 'Preço'){
            setFiltroPreco(obj);
        }

        if(props.item == 'Avaliação'){
            setFiltroAvaliacao(obj);
        }

        if(props.item == 'Estoque'){
            setFiltroEstoque(obj);
        }



    } 

    useEffect(()=>{
        

        if(!input1 && !input2){


            setButtonFonte('');
            setButtonFundo('');

        }

        else{


            
            setButtonFonte('white');
            setButtonFundo('#413E3E');


        }

        setarValores();
        

        


    }, [input1, input2, setFiltroPreco, setFiltroAvaliacao, setFiltroEstoque])







    return(

        <div 
        className='valores-selec' 
       
        style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}`}}
        >

            <p>{props.item}</p>
            <input type='number' 
            placeholder={props.inter}
            onChange={(e) => {setInput1(e.target.value); setarValores()}} ></input>
            <p>e</p>
            <input type='number'
            placeholder={props.inter}
            onChange={(e) => {setInput2(e.target.value); setarValores()}} ></input>
        </div>


    )




}