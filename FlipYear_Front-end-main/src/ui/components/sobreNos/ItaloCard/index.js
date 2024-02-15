import './style.scss';

import cj from '../../../assets/images/sobreNos/ddpmnj6-fd1085fd-8f35-41d4-a845-2fe637e1d4c8.gif';

export default function DenzCard() {

  return (
    <main className='Main_Card2'>
      <div className='Card'>
        <header className='H1'>
          <span className='NameTier'>
            <span className='basic'>Basic</span>
            <h4>
              Italo R.
            </h4>
          </span>

          <span className='hp'>
            <a >HP</a>
            <h5>450</h5>
            <h4>D</h4>
          </span>
        </header>

        <div className='img'>
          <img src={cj} />
        </div>

        <div className='infos'>
          <header className='H2'>
            <a>Ability</a>
            <h4>JOGO PREFERIDO</h4>
          </header>
          <p>GTA San Andreas</p>

          <header className='H2'>
            <span className='Bottoms'>
              <a>+</a>
              <a>@</a>
              <a>#</a>
            </span>
            <h4 style={{ color: '#000' }}>Memorias Com Jogos</h4>
          </header>
          <p>Causando o caos em Los Santos numa tarde de domingo</p>
        </div>

        <div className='AirLine'>
          <div>
            <a>Fraqueza</a>
            <span>
              <a>forca</a>
            </span>

          </div>
        </div>
        <a className='copy'>&copy; 2023 FlipYear 2000 </a>
      </div>
    </main>
  );
}