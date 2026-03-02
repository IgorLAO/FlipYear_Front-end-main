import './index.scss';

import { GetBusca } from '../../api/produtos';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { prettyDOM } from '@testing-library/react';

import NavBar from '../../ui/components/navBar';
import Rodape from '../../ui/components/rodape'
import CarrinhoIMG from '../../ui/assets/images/perfil-pessoal/image-removebg-preview (8) 2.png'
import Fantasma1 from '../../ui/assets/images/perfil-side-bar/fantasma 2.png'
import CardProdutoCtlg from '../../ui/components/card-produto-ctlg';
import Fantasma2 from '../../ui/assets/images/perfil-side-bar/fantasma4.png'
import { ConsultaCarrinho } from '../../api/carrinho';
import { ConsultarProdPorId } from '../../api/produtos';
import ListagemCarrinho from '../../ui/components/popupCarrinho/ListagemCarrinho';

import { useParams } from 'react-router-dom';

export default function Carrinho() {
    const [mostrarCarrinho, SetMostrarCarrrinho] = useState(true);
    const [listaCarrinho, setListaCarrrinho] = useState([]);
    const [produtos, setProdutos] = useState({});
    
    const {idParam} =  useParams();

    useEffect(() => {
        CarregarProdutos()
    },[]);

    async function CarregarProdutos() {
        const resp = await ConsultarProdPorId(idParam);
        setProdutos(resp);
    }


    async function consultaProdutos() {
        try {
            let resposta = await ConsultaCarrinho();
            setListaCarrrinho(resposta);
            console.log(resposta[0]);
        } catch (error) {
            throw new Error(`Erro ao buscar produtos ): `)
        }
    }

    useEffect(() => {
        consultaProdutos();
    }, []);

    return (
        <div className='pag-carrinho'>
            <NavBar />
            <div className='pedidos'>
                <img src={CarrinhoIMG}></img>
                <div className='titulo'>
                    <p>Meus Pedidos</p>
                    <div className='lb-carrinho'></div>
                </div>
            </div>

            {
                (mostrarCarrinho === true) ? (
                    <div className='lista-carrinho'>
                        
                        {listaCarrinho.map((produto, index) => (
                            
                            <CardProdutoCtlg produtos={produtos}
                                key={index}
                                preco={produto.VL_PRECO}
                                nome={produto.NM_PRODUTO}
                                precoPromocao={produto.VL_PRECO_PROMOCIONAL}
                                promocao={produto.BT_PROMOCAO}
                                avaliacao={produto.VL_AVALIACAO}
                                fabricante={produto.NM_FABRICANTE}
                                estado={produto.TP_ESTADO}
                            />
                        ))}
                        
                    </div>
                ) : (
                    <div className='vazio'>
                        <img src={Fantasma2} className='fantasma2' alt='fantasma2'></img>
                        <p>Parece que está vazio :{`(`}</p>
                        <img src={Fantasma1} className='fantasma1' alt='fantasma1'></img>
                    </div>
                )
}
            <Rodape></Rodape>
        </div>
    )




}