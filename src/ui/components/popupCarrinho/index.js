import './index.scss';

import axios from 'axios';
import linhaAstersico from '../../assets/images/carrinho_assets/linhaAsterisco.png'
import Logo from '../../assets/images/perfil-side-bar/arcade_Logo 21.png'
import linhaAsteriscoMenor from '../../assets/images/carrinho_assets/linhaAsteriscoMenor.png'
import Fantasma1 from '../../assets/images/carrinho_assets/fantasmapopupcarrinho1.png'
import Fantasma2 from '../../assets/images/carrinho_assets/fantasmapopupcarrinho2.png'
import ListagemCarrinho from './ListagemCarrinho.js'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ConsultaCarrinho } from '../../../api/carrinho.js';
import localStorage from 'local-storage';

export default function PopUpCarrinho({ setPopUpCarro }) {
    const estoragemLocal = localStorage('ADM_Logado')
    const [idUser, setIdUser] = useState(1);


    const [dataCarrinho, setDataCarrinho] = useState([]);
    const [total, SetTotal] = useState(0)


    function mostrarCarrinho() {
        setPopUpCarro((current) => !current);

    }


    async function PuxarCarrinho() {
        SetTotal(0);

        let respCarrinho = await ConsultaCarrinho(idUser);
        setDataCarrinho(respCarrinho);
    }

    async function LimparCarrinho() {


    }

    async function CalcularTotal() {

        let total = 0;
        dataCarrinho.map((item) => {

            if (item.BT_PROMOCAO == true) {
                let calculo = item.VL_PRECO_PROMOCIONAL * item.QTD_PRODUTO_CARRINHO;
                total = total + calculo;
            }
            else {
                let calculo = item.VL_PRECO * item.QTD_PRODUTO_CARRINHO;
                total = total + calculo;
            }
        })

        SetTotal(total);
    }

    useEffect(() => {
        PuxarCarrinho();
        CalcularTotal();

    }, [dataCarrinho]);


    return (
        <div className='Main-PopUpKKart' >
            <div className='backDrop' onClick={() => {mostrarCarrinho(); 
                                                        document.getElementById('car').classList.add('carSlide')}}>
                </div>
            <div className='popUp-carrinho' id='car'>

                <p className='x' onClick={() => {mostrarCarrinho();
                                                        document.getElementById('car').classList.add('carSlide')}}>X</p>

                <div className='puc-Logo'>
                    <img src={Logo}></img>
                    <p>FLIP-YEAR</p>
                    <p className='puc-2000'>2000</p>
                </div>

                <div className='puc-campos'>

                    <p>Qtd.</p>
                    <p>Item</p>

                    <p>Preço</p>
                </div>
                <span>
                    ********************************************************************
                </span>


                {dataCarrinho.map((item) =>

                    <ListagemCarrinho
                        qtd={item.QTD_PRODUTO_CARRINHO}
                        nome={item.NM_PRODUTO}
                        precoOriginal={item.VL_PRECO}
                        precoPromocional={item.VL_PRECO_PROMOCIONAL}
                        promocao={item.BT_PROMOCAO}
                        idProduto={item.ID_PRODUTO}>

                    </ListagemCarrinho>

                )}


                {
                    (dataCarrinho.length > 0)

                        ? <></>

                        : <div className='puc-listaPedidos'>

                            <img src={Fantasma1} className='puc-fantasma1'></img>

                            <p>Me parece vazio :{'('}</p>

                            <img src={Fantasma2} className='puc-fantasma2'></img>
                        </div>


                }
                <span>
                    ********************************************************************
                </span>


                <div className='puc-total'>
                    <p className='titulo'>Total</p>
                    <p className='valor'>$ {total}</p>
                </div>

                <div className='puc-asteriscoCentro'>
                    <span>
                        ********************************************************************
                    </span>
                </div>
                
            </div>
        </div>
    )
}