import './style.scss';

import mrKarate from '../../../assets/images/sobreNos/takuma-stance.gif';

export default function IgoCard() {

    return (
        <main className='Main_Card2'>
            <div className='Card'>
                <header className='H1'>
                    <span className='NameTier'>
                        <span className='basic'>Basic</span>
                        <h4>
                           Igor L.
                        </h4>
                    </span>

                    <span className='hp'>
                        <a >HP</a>
                        <h5>400</h5>
                        <h4>I</h4>
                    </span>
                </header>

                <div className='img'>
                    <img src={mrKarate} />
                </div>

                <div className='infos'>
                    <header className='H2'>
                        <a>Ability</a>
                        <h4>JOGO PREFERIDO</h4>
                    </header>
                    <p>The King of Fighters 2002</p>

                    <header className='H2'>
                        <h4>Memoria</h4>
                    </header>
                    <p>DEV FODA MUITI KKKKKKK OIAsdasdda ELAAAA</p>
                </div>

                <div className='AirLine'>
                    <div>
                        <a>Fraqueza</a>
                        <span>
                            forca
                        </span>
                    </div>
                </div>

            </div>
        </main>
    );
}