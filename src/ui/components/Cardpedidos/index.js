import './index.scss';
import Carrinho from '../../assets/images/progress_pag_assets/carrinho_logo.png';
import Filtro from '../../assets/images/NavBar_assets/filtro_logo.png';
import { useState } from 'react';

const [list, setList] = useState([]);

export default function CardPedidos (){
    return(
        <>
            <div className="container-pedidos">
                <div className="cabecalho">
                    <img src={Carrinho}/>
                    <h1>Meus pedidos</h1>
                    <img src={Filtro}/>
                </div>
                <div className='pedidos'>
                    {list.map((e) => <div>{e}</div>)

                    }
                </div>
            </div>
        </>
    )
}