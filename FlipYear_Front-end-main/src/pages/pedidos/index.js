import './index.scss';
import axios from 'axios';

import produto from '../../ui/assets/images/imageExamples/yum game_tras 1.png'
import certo from '../../ui/assets/images/pedido/certo.png';
import errado from '../../ui/assets/images/pedido/errado.png'
import voltar from '../../ui/assets/images/pedido/voltar.png';

import { useNavigate } from 'react-router-dom';
import { GetAllPedidos } from '../../api/pedidos';

async function ConsultarPedidos(){
    //const resp = await GetAllPedidos(id);

}

export default function MeusPedidos(){

    const navigate = useNavigate();
        
    return(
        <>
            <div className="container-meupedido">
                <div id="voltar">
                    <img src={voltar}/>
                    <p>Voltar</p>
                </div>
                <h1 id='titulo'>Informações do Pedido</h1>
                <div  className="inform-pedidos">
                    <div id="img">
                        <img src={produto}/>
                        <p>Atari 3000</p>
                    </div>
                    <div  className="detalhes">
                            <h1 style={{fontSize: '24px'}}>Código do produto: 123212 {}</h1>
                            <div>
                                <img src={certo}/>
                                <p>Pedido Recebido</p>
                            </div>
                            <div>
                                <img src={certo}/>
                                <p>Pedido em separação</p>
                            </div>
                            <div>
                                <img src={certo}/>
                                <p>Nota fiscal emitida</p>
                            </div>
                            <div>
                                <img src={certo}/>
                                <p>Produto expedido</p>
                            </div>
                            <div>
                                <img src={errado}/>
                                <p>Enviado para transportadora</p>
                            </div>
                            <div>
                                <img src={errado}/>
                                <p>Mercadoria em trânsito</p>
                            </div>
                    </div>
                </div>
                <div className="detalhes-produto">
                    <h1>Detalhes do produto</h1>
                    <div className="status-produto">
                        <div>
                            <p>Status: Em trânsito</p>
                        </div>
                        <div>
                            <p>Data da compra: 24/11/2023</p>
                        </div>
                        <div>
                            <p>Pagamento: Cartão de crédito</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}