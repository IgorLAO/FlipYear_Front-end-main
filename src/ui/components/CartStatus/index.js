import './index.scss';
import Carrinho_logo from "../../assets/images/NavBar_assets/carrinho_logo_cabecalho.png";
import { ConsultaCarrinho } from '../../../api/carrinho';
import { useEffect, useState } from 'react';

export default function CartStatus({mostrarCarrinho}){
    const [list, setList] = useState([]);

   async function chamarCarrinho(){
        mostrarCarrinho();

        const resp = await ConsultaCarrinho();
        setList(resp[0]);
    }

    useEffect(() =>{
        chamarCarrinho();
    }, []);

    return(
        <>
            <div className="cart-status" onClick={chamarCarrinho}>
                <img src={Carrinho_logo}/>
                <span>{''}</span>
            </div>
        </>
    )
}