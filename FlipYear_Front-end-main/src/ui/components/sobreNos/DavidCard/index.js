import './style.scss';

import reileao from '../../../assets/images/sobreNos/reileao9.gif';

export default function DenzCard() {

  return (
    <main className='Main_Card2'>
      <div className='Card'>
        <header className='H1'>
          <span className='NameTier'>
            <span className='basic'>Basic</span>
            <h4>
              David
            </h4>
          </span>

          <span className='hp'>
            <a >HP</a>
            <h5>450</h5>
            <h4>D</h4>
          </span>
        </header>

        <div className='img'>
          <img src={reileao} />
        </div>

        <div className='infos'>
          <header className='H2'>
            <a>Ability</a>
            <h4>JOGO PREFERIDO</h4>
          </header>
          <p>Rei Leão</p>

          <header className='H2'>
            <span className='Bottoms'>
              <a>+</a>
              <a>@</a>
              <a>#</a>
            </span>
            <h4 style={{ color: '#000' }}>Memorias Com Jogos</h4>
          </header>
          <p>Zerar Rei Leão de Mega Drive junto com os meus amigos numa tarde</p>
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