import './index.scss';

import Corvo from '../../../assets/images/perfil-publico_assets/download 2.png'
import Gato from '../../../assets/images/perfil-publico_assets/5759cdb17f90d64d25e9e59854181dde 2.png'
import Estrela from '../../../assets/images/perfil-publico_assets/strela 1.png'
import Bandeira from '../../../assets/images/perfil-publico_assets/bandeira.png'

export default function PopUpPerfil(){

    return(
        <div className="background-popup-user">
            <div className='pop-up-user'>
                <img src={Gato} className='banner-gato'></img>
                <div className='pfp-likes'>
                    <div className='bordapreta-pfp1'>
                    <img src={Corvo} className='pfp-popup-user'></img>
                    </div>
                    <div className='likes-popup-user'>
                    <img src={Estrela} className='likes-estrela'></img>
                    <p>x16</p>
                    </div>
                </div>

                <p className='nomeuser-popup-user'>Ind0m4bl3_Cr0w</p>
                
                <div className='outras-avaliacoes'>
                    <h3>Outras Avaliações:</h3>
                   <div className='linha-branca-popup-user'></div>
                   <div className='denuncia-coment-popup-user'>
                    <div className='comentario-popup-user'>
                        <div className='pfp-info-popup-user'>
                            <div className='bordapreta-pfp2'>
                            <img src={Corvo}></img>
                            </div>
                            <div className='textos-popup-user'>
                            <div className='nome-tempo-popup-user'>
                            <p>Ind0m4bl3_Cr0w</p>
                            <p className='tempo-popup-user'>
                                há 3 semanas
                            </p>
                        </div>
                        <p className='coment-popup-user'>Vamos Consertar!!!</p>

                            </div>

                            </div>
                    </div>
                <img src={Bandeira} className='denuncia-popup-user'></img>

                   </div>
                </div>

            </div>
        </div>



    )




}