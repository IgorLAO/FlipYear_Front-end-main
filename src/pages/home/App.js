import './App.scss';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import localStorage from 'local-storage';
import axios from 'axios'
import { GetAllProdDestaque, GetPagProdDestaque } from '../../api/produtos';

import NavBar from '../../ui/components/navBar';
import Rodape from '../../ui/components/rodape'

import nes from "../../ui/assets/images/Home_assets/nes_Console 1.png";
import gameBoy from "../../ui/assets/images/Home_assets/gameboy.png";
import block from "../../ui/assets/images/Home_assets/block.png";
import pixel_s2 from "../../ui/assets/images/Home_assets/pixel_block2.png";

import morcegos from "../../ui/assets/images/Home_assets/pixel_bat.png";
import alucard from "../../ui/assets/images/Home_assets/alucard2.png";
import consolesBlock1 from "../../ui/assets/images/Home_assets/consolesBlock1.png";
import Produtos from '../../ui/components/produtos';

function App() {
  const [mostrarDestaques, setMostrarDestaques] = useState([]);
  const [pageDestaqueNum, setPageDestaqueNum] = useState(1);
  const [CardResposiveLimit, setCardResposiveLimit] = useState(1);
  const [mostrarAllDestaques, setMostrarAllDestaques] = useState([])
  const navigate = useNavigate('');

  async function ConsultaDestaqueProdutos() {
    try {
      let sql = await GetAllProdDestaque();
      let produtos = sql.data;

      setMostrarDestaques(produtos);

    } catch (error) {
      throw new Error('Erro ao buscar produtos em destaque', error);
    }
  }

  function ResposiveCards() {
    const t = window.innerWidth
    console.log(t)
    if (t < 950) setCardResposiveLimit(1);

    else setCardResposiveLimit(5);
  }

  function LimparPesquisa() {
    localStorage('SearchValue', '');
  }


  useEffect(() => {
    ResposiveCards();
    ConsultaDestaqueProdutos();

  }, [])


  return (
    <div className="App">
      <NavBar />

      <section className='s1'>
        <div className='block'>
          <div className='texts'>
            <h1>Pra que máquina do tempo se existe Super Nintendo?</h1>
            <a>Relembrando a infância: gastar o troco em fliperama, inventar desculpa para a mãe, competir no Streets of Rage, nostalgia dos video games. Busque seu favorito no catálogo e volte a ser criança por um dia! Não se esqueça de assoprar a fita antes de jogar!</a>
            <Link to='/catalogo'>
              <span className='btnHome' onClick={LimparPesquisa}>
                <svg xmlns="http://www.w3.org/2000/svg" width="242" height="63" viewBox="0 0 242 63" fill="none">
                  <g opacity="0.5">
                    <rect x="4.56641" y="5.03906" width="234.748" height="53.2617" fill="#E0F8D0" />
                    <rect y="7.42188" width="4.56604" height="49.3479" fill="#E0F8D0" />
                    <rect x="11.3867" width="223.02" height="7.46053" fill="#E0F8D0" />
                    <rect x="234.48" y="7.42188" width="7.52053" height="47.9866" fill="#E0F8D0" />
                    <rect x="11.3867" y="55.5391" width="223.02" height="7.46053" fill="#E0F8D0" />
                  </g>

                </svg>
                <button>
                  <p>Catálogo</p>

                </button>
              </span>
            </Link>
          </div>
          <span className='imgs'>
            <img src={consolesBlock1} id='l' />

          </span>
        </div>
        <img style={{ width: 90 + '%', heigth: 100 }} src={block} />
      </section>
      <div>
    <h4 style={{color: "#fff", fontSize: '20px', marginLeft: '45px'}}> Nossos Melhores Produtos </h4>
        <Produtos
          CardResposiveLimit={CardResposiveLimit}
          products={mostrarDestaques} />

      </div>
      {/* <section className='s2'>
        <span className='cover1' id='covers'>
          <a>Os melhores preços!</a>
          <button> CONFIRA </button>
        </span>

        <span className='cover2' id='covers'>
          <a>Os Melhores Jogos</a>
          <button> VER JOGOS </button>
        </span>

        <span className='cover3' id='covers'>
          <a> Nos Conheça </a>

          <button onClick={() => { navigate('/sobrenos') }}>
            SOBRE NOS
          </button>
        </span>
      </section> */}

      <section className='s3'>
        <h2> Raridade no pedaço!!! </h2>
        <div className='block2'>
          <span className='texts'>
            <h1> Castlevania Symphony of the Night Akumajo Dracula X  </h1>
            <a> Um simphony of the night classico...MAS VEIO DO JAPÃO!!!</a>
            <span>

              <button onClick={() => navigate('/castlevania')}> Confira </button>
            </span>
          </span>
          <span className='imgs'>
            <img src={morcegos} className='morcegos' />
            <img src={morcegos} className='morcegos1' />
            <img src={alucard} className='alucard' />
          </span>
        </div>
        <img src={pixel_s2} style={{ width: 100 + "%", marginTop: -10 }} />
      </section>
      <section className='s4'>
        <h2> Em destaque </h2>
        <hr />
        <div className='produtos'>

          <Produtos
            CardResposiveLimit={CardResposiveLimit}
            products={mostrarDestaques} />

        </div>
      </section>
      <Rodape />
    </div>
  );
}

export default App;
