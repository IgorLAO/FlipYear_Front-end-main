import './index.scss';
import filtro from '../../assets/images/NavBar_assets/filtro_logo.png'
import { useState } from 'react';

import Butao from './butao/butao';
import ListaFiltro from './lista/lista';
import ValoresFiltro from './valores/valores';

export default function Filtro(props) {

    const {setFiltroPreco, 
        FiltroDestaque, 
        FiltroColecionador, 
        FiltroPromocao,
        setFiltroEmpresa,
        setFiltroEstado, 
        setFiltroAvaliacao,
        setFiltroEstoque,
        FiltroConsole,
        FiltroCD,
        FiltroFita,
        FiltroFliperama,
        setPopUpFiltro} = props;
    return (
        <div className='direcao'>

            <div className='clicar-fora' onClick={() =>{ setPopUpFiltro(false) }}></div>        

            <div className='card-filtro'>

                <div className='opc-selec'>

                    <ListaFiltro item={'Ordavaliacao'}></ListaFiltro>
                    <ListaFiltro item={'Ordpreco'}></ListaFiltro>

                </div>


                <div className='titulo'>
                    <div>
                        <img src={filtro}></img>
                        <h2>Tipo de Produto</h2>
                    </div>
        </div>
                    <div className='linha-preta'></div>

                <div className='opc-selec'>

                <div onClick={FiltroCD}>
                    <Butao item={'Jogos de CD'}></Butao>
                    </div>


                    <div onClick={FiltroFita}>
                    <Butao item={'Jogos de Fita'}></Butao>
                    </div>

                    <div onClick={FiltroConsole}>
                    <Butao item={'Consoles'}></Butao>
                    </div>
                    
                    <div onClick={FiltroFliperama}>
                    <Butao item={'Fliperamas'}></Butao>
                    </div>

                    <ListaFiltro 
                    item={'Empresa'}
                    setFiltroEmpresa={setFiltroEmpresa}></ListaFiltro>


                </div>


                <div className='titulo'>
                    <div>
                        <h2>Atributos</h2>
                    </div>
                    <div className='linha-preta'></div>
                </div>

                <div className='opc-selec'>

                <div onClick={FiltroPromocao}>
                    <Butao item={'Promoção'}></Butao>
                    </div>

                    <div onClick={FiltroDestaque}>
                    <Butao item={'Destaque'}></Butao>
                    </div>

                    <div onClick={FiltroColecionador}>
                    <Butao 
                    item={'Colecionador'}>
                    </Butao>
                    </div>

                    <ListaFiltro 
                    item={'Estado'}
                    setFiltroEstado={setFiltroEstado}></ListaFiltro>


                </div>

                <div className='titulo'>
                    <div>
                        <h2>Valores</h2>
                    </div>
                    <div className='linha-preta'></div>
                </div>

                <div className='opc-selec'>

                    <ValoresFiltro
                        item={'Preço'}
                        inter={'?????'}
                        setFiltroPreco={setFiltroPreco}
                    ></ValoresFiltro>

                    <ValoresFiltro
                        item={'Estoque'}
                        inter={'???'}
                        setFiltroEstoque={setFiltroEstoque}>
                    </ValoresFiltro>

                    <ValoresFiltro
                        item={'Avaliação'}
                        inter={'?'}
                        setFiltroAvaliacao={setFiltroAvaliacao}
                        >
                    </ValoresFiltro>


                </div>
                </div>
        </div>




           









    )




}
