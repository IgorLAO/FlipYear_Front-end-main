import './index.scss';
import CabecalhoSimples from "../../ui/components/cabecalhoSimples";
import Rodape from '../../ui/components/rodape';

import Carrinho from '../../ui/assets/images/progress_pag_assets/carrinho_logo.png';
import Cartao from '../../ui/assets/images/progress_pag_assets/cartao_progresso_pagamento 1.png';
import Confirmacao from '../../ui/assets/images/progress_pag_assets/olho_progresso_pagamento 1.png';
import SonicEspera from '../../ui/assets/images/progress_pag_assets/sonic_esperando_progresso_100% 1.png';
import Concluir from '../../ui/assets/images/progress_pag_assets/confirm 1.png';

import { Navigate, useNavigate } from 'react-router-dom';
import { ConsultarProdPorId } from '../../api/produtos';


import { useParams } from 'react-router-dom';

export default function Pagamento100() {

    const navigate = useNavigate();

    function navCtlg(){
        navigate(`/catalogo`);
    }
    async function ConcluirCompra(){
        const r = await ConsultarProdPorId();
    }
    return (
        <>
            <CabecalhoSimples />
            <div className="container_pag100">
                <div className='estado_pag'>
                    <div className='icons_pag'>
                        <div>
                            <img src={Carrinho} />
                            <p>Carrinho</p>
                        </div>
                        <div>
                            <img src={Cartao} />
                            <p>Pagamento</p>
                        </div>
                        <div>
                            <img src={Confirmacao} />
                            <p>Confirmação</p>

                        </div>
                        <div>
                            <img src={Concluir} />
                            <p>Concluído</p>
                            <img src={SonicEspera} style={{ width: "55px" }} />
                        </div>
                    </div>
                    <div className='pista'> </div>
                </div>
            <div className='container_pedido'>    
                <div className='pedido_concluido'>
                    <img src={SonicEspera}/>
                    <div className='mensagem_concluido'>
                        <div>
                            <img src={Concluir} />
                            <h1>Seu pedido foi concluido!</h1>
                        </div>
                        <div id='codigo_pedido'>
                            <p>O código do seu pedido é</p>
                            <h1>{}9999</h1>
                        </div>
                    </div>

                    <div style={{gap:"15px"}} className='opcoes_botoes'>
                        <a>Ver meus pedidos</a>
                        <a id='navegar' onClick={navCtlg}>Continuar navegando</a>
                    </div>
                        
                </div>
            </div>
            </div>
            <Rodape />
        </>
    )
}