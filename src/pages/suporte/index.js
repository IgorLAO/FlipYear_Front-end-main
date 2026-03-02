import './style.scss';

import NavBar from '../../ui/components/navBar';

import pc from '../../ui/assets/images/suporte/pc.gif'
import blockG from '../../ui/assets/images/suporte/blockGreen.svg';
import { Navigate } from 'react-router-dom';


export default function Suporte() {
    

    return (
        <div className="Main_suporte">
            <NavBar />
            <header>
                <div className='Texts'>
                    <h4>Procurando Ajuda?</h4>
                    <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mae</a>
                </div>

                <img src={pc} />
            </header>
            <section>
                <div className='optBlock'>
                    <h4>
                        Duvidas sobre:
                    </h4>
                    <div className='btns'>
                        <span className='opt'>
                            <div className='blockG'></div>
                            <a>
                                Consoles
                            </a>

                        </span>
                        <span className='opt'>
                            <div className='blockG'></div>
                            <a>
                                Jogos
                            </a>

                        </span>
                        <span className='opt'>
                            <div className='blockG'></div>
                            <a>
                                Compras
                            </a>

                        </span>
                        <span className='opt'>
                            <div className='blockG'></div>
                            <a>
                                Minha conta
                            </a>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}