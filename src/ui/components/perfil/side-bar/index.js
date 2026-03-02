import './index.scss'

import Fantasma1 from '../../../assets/images/perfil-side-bar/fantasma.png'
import Fantasma2 from '../../../assets/images/perfil-side-bar/fantasma 2.png'
import Fantasma3 from '../../../assets/images/perfil-side-bar/fantasma 3.png'

import Logo from '../../../assets/images/perfil-side-bar/arcade_Logo 21.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function SideBarFazerConta({ setLogado, setMenuLateralHidden }) {

    

    function logar() {
        setLogado(true);
        setMenuLateralHidden(false);


    }

    function Condeu() {
        document.body.style.overflow = 'unset';
        setMenuLateralHidden(false);
        setLogado(false);
    }

    document.body.style.overflow = 'hidden';
    
    return (
    <>
            <div className="escurecer-fundo" onClick={Condeu}></div>


    <div className='barra-lateral'>

        <p className='fechar-sb' onClick={Condeu}>X</p>

        <div className='fantasmas'>
            <img src={Fantasma1} className='fant-1'></img>
            <img src={Fantasma2} className='fant-2'></img>
            <img src={Fantasma3} className='fant-3'></img>
        </div>

        <p className='mensagem'>É necessário ter uma conta</p>

        <Link to={'/login'}>
        <div  onClick={logar} className='logar-op'>
            
            <p>Logar</p>
            

            <svg xmlns="http://www.w3.org/2000/svg" width="132" height="46" viewBox="0 0 132 46" fill="none">
                <g filter="url(#filter0_d_1468_11)">
                    <rect x="12.5273" y="11.6641" width="107.342" height="22.7592" fill="#346856" />
                    <rect x="10.4395" y="12.6797" width="2.08788" height="21.0868" fill="#346856" />
                    <rect x="15.4746" y="10.5703" width="102.183" height="2.10868" fill="#346856" />
                    <rect x="117.658" y="12.6797" width="3.43887" height="20.5051" fill="#346856" />
                    <rect x="15.4746" y="33.1875" width="102.183" height="2.18139" fill="#346856" />
                </g>
                <defs>
                    <filter id="filter0_d_1468_11" x="0.439453" y="0.570312" width="130.658" height="44.7969" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1468_11" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1468_11" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
        </Link>

        <Link to={'/cadastro'}>
        <div className='cadastro-op'>
            
            <p> Cadastrar-se</p>

       
            <svg xmlns="http://www.w3.org/2000/svg" width="167" height="46" viewBox="0 0 167 46" fill="none">
                <g filter="url(#filter0_d_1468_25)">
                    <rect x="13.2734" y="11.6641" width="141.249" height="22.7592" fill="#88C070" />
                    <rect x="10.5273" y="12.6797" width="2.74741" height="21.0868" fill="#88C070" />
                    <rect x="17.1523" y="10.5703" width="134.462" height="2.10868" fill="#88C070" />
                    <rect x="151.613" y="12.6797" width="4.52515" height="20.5051" fill="#88C070" />
                    <rect x="17.1523" y="33.1875" width="134.462" height="2.18139" fill="#88C070" />
                </g>
                <defs>
                    <filter id="filter0_d_1468_25" x="0.527344" y="0.570312" width="165.611" height="44.7969" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1468_25" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1468_25" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
            </Link>

        <div className='logo'>

            <img src={Logo} />
            <p>FLIP-YEAR</p>
            <p className='doisk'>2000</p>

        </div>


    </div>
    </>
    )





}