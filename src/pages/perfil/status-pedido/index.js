import './index.scss';
import Atari from '../../../ui/assets/images/imagesCardProduto/nintendo_Console-removebg-preview 102.png'
import Confere from '../../../ui/assets/images/status_produtos_assets/confere-removebg-preview 1.png'
import Desconf from '../../../ui/assets/images/status_produtos_assets/desconf-removebg-preview 1.png'
import Fabrica from '../../../ui/assets/images/status_produtos_assets/fabrica_icon.png'
import Casa from '../../../ui/assets/images/status_produtos_assets/casa_icon.png'
import Caminhao from '../../../ui/assets/images/status_produtos_assets/caminhao_icon.png'


export default function StatusPedido(){

    return(

        <div className='pag-status-pedido'>

            <div className='retornar'>
            <p>seta</p>
            <p className='voltar'>voltar</p>
            </div>

            <div className='titulo-pedido'>
                <p>Informações do Pedido</p>
                <div className='linha-branca'></div>
            </div>

            <div className='card-status'>

                <div className='card'>
                    <img src={Atari}></img>
                    <p>Atari 3000</p>
                </div>

                <div className='status'>
                    <p className='codigo'>
                        Código do Produto: 4T45GH
                    </p>


                    <div className='bullet-points'>
                        <img src={Confere}></img>
                        <p>Pedido Recebido</p>
                    </div>

                    <div className='bullet-points'>
                        <img src={Confere}></img>
                        <p>Pedido em separação</p>
                    </div>

                    <div className='bullet-points'>
                        <img src={Confere}></img>
                        <p>Nota fiscal emitida</p>
                    </div>

                    <div className='bullet-points'>
                        <img src={Confere}></img>
                        <p>Produto Expedido</p>
                    </div>

                    <div className='bullet-points'>
                        <img src={Desconf}></img>
                        <p>Enviado para transportadora</p>
                    </div>

                    <div className='bullet-points'>
                        <img src={Desconf}></img>
                        <p>Mercadoria em Trânsito</p>
                    </div>

                </div>

            </div>

            <div className='canto-tarja'>
                <div className='tarja-preta'></div>
            </div>


            <div className='detalhes'>
                <p className='titulo'>Detalhes do produto</p>
            </div>

            <div className='info'>

                <div className='card-infos'>
                    <p>Status: Em trânsito</p>
                </div>

                <div className='card-infos'>
                    <p>Data de compra: 02/03/2023</p>
                </div>

                <div className='card-infos'>
                    <p>Pagamento: Cartão de Crédito</p>
                </div>

            </div>

            <div className='caminho-produto'>

                <div className='imagens'>
                    <img src={Fabrica}></img>
                    <img src={Caminhao}></img>
                    <img src={Casa}></img>

                </div>

                <div className='barra'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1271" height="20" viewBox="0 0 1291 20" fill="none">
                <path d="M10 10H1281" stroke="#86C06C" stroke-width="20" stroke-linecap="square"/>
            </svg>

                <div className='losango'></div>

                </div>


            </div>


        </div>



    )




}