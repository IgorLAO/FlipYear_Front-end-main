import './index.scss';

import ZAP from '../../assets/images/rodape_assets/whatsapp.png';
import Tel from '../../assets/images/rodape_assets/telefone.png';
import Email from '../../assets/images/rodape_assets/email.png';
import CertSeg from '../../assets/images/rodape_assets/protection_logo.png';
import Visa from '../../assets/images/rodape_assets/visa.png';
import MercadoPago from '../../assets/images/rodape_assets/mercado_pago.png';
import MasterCard from '../../assets/images/rodape_assets/mastercard.png';
import HyperCard from '../../assets/images/rodape_assets/hypercard.png';
import Pix from '../../assets/images/rodape_assets/pix.png';
import Boleto from '../../assets/images/rodape_assets/boleto.png';
import Youtube from '../../assets/images/rodape_assets/youtube_logo.png';
import Instagram from '../../assets/images/rodape_assets/instagram_logo.png';
import Facebook from '../../assets/images/rodape_assets/facebook_logo.png';

import { useNavigate } from 'react-router-dom';

export default function Rodape() {

    const navigate = useNavigate();

    function suporte() {
        navigate('/Suporte');
    }
    function sobrenos() {
        navigate('/sobrenos');
    }
    function catalogo() {
        navigate('/catalogo');
    }
    function login() {
        navigate('/login');
    }
    return (
        <>
            <div className="container_rodape">
                <div className="topicos">
                    <div >
                        <h1>CONTEÚDO</h1>

                        <a onClick={suporte}>Suporte</a>
                        <a onClick={login}> Minha Conta</a>
                        <a onClick={sobrenos}>Sobre Nós</a>
                        <a onClick={catalogo}>Catálogo</a>

                    </div>
                    <div>
                        <h1>CATEGORIAS</h1>
                        <a>Nintendo</a>
                        <a>Sega</a>
                        <a>Jogos</a>
                        <a>Colecionador</a>
                    </div>
                    <div className="contato">
                        <h1>CONTATO</h1>

                        <div>
                            <img src={Tel} />
                            <p>Telefone:(11)9999-9999</p>
                        </div>
                        <div>
                            <img src={ZAP} />
                            <p>Whatsapp: (11)9999-9999</p>
                        </div>
                        <div>
                            <img src={Email} />
                            <p>E-mail: FlipYear2000Contact@gmail.com</p>
                        </div>
                    </div>
                    <div className="formas_pagamento">
                        <h1>FORMAS DE PAGAMENTO</h1>
                        <div className="images_pagamento">
                            <div>
                                <img src={Visa} />
                                <img src={MercadoPago} />
                                <img src={MasterCard} />
                            </div>
                            <div>
                                <img src={HyperCard} />
                                <img src={Pix} />
                                <img src={Boleto} />
                            </div>
                        </div>
                        <div className="redes_sociais">
                            <h1>Siga-nos nas Redes Sociais</h1>

                            <div>
                                <img src={Facebook} />
                                <img src={Instagram} />
                                <img src={Youtube} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cert_seguranca">
                    <h1>CERTIFICADOS DE SEGURANÇA</h1>

                    <img src={CertSeg} />
                </div>
                <div className="copyright">
                    <div></div>
                    <p>Copyright © 2023 FLIPYEAR2000 Inc. Todos os direitos reservados.</p>
                </div>
            </div>
        </>
    )
}