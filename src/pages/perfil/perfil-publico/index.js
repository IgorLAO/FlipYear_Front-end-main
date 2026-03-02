import './index.scss';
import BannerGato from '../../../ui/assets/images/perfil-publico_assets/5759cdb17f90d64d25e9e59854181dde 2.png'
import Corvo from '../../../ui/assets/images/perfil-publico_assets/download 2.png'
import Exclamacao from '../../../ui/assets/images/perfil-publico_assets/exclamacao 1.png'
import Estrela from '../../../ui/assets/images/imagesCardProduto/estrela_cheia-avaliacao 11.png'
import CardPedido from '../../../ui/components/perfil/card-pedido'

export default function Perfil() {

    return (

        <div className='perfil-pag'>
            <img src={BannerGato}></img>

            <div className='perfil-infos'>

                <div className='meio'>
                    <div className='pfp'>
                        <img src={Corvo}></img>
                    </div>
                    <p className='nome'>Ind0m4bl3_Cr0w</p>
                </div>

                <div className='estrela-curtidas'>
                    <img src={Estrela}></img>
                    <p className='curtidas'>x16</p>
                    <img src={Exclamacao} className='exclamacao'></img>
                </div>

            </div>

            <div className='avaliacoes'>
                <p className='outras'>Outras Avaliações:</p>

                <svg className='linha-titulo' xmlns="http://www.w3.org/2000/svg" width="458" height="2" viewBox="0 0 458 2" fill="none">
                    <path d="M0 1L458 1" stroke="black" stroke-width="2" />
                </svg>

                <p className='avaliacao'>Vamos Consertar !!!</p>
                <svg className='linha-avaliacao' xmlns="http://www.w3.org/2000/svg" width="242" height="2" viewBox="0 0 242 2" fill="none">
                    <path d="M0 1L242 1" stroke="black" stroke-width="2" />
                </svg>
            </div>
            <CardPedido />

        </div>



    )




}