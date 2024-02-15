import Butao from '../butao/butao'
import ListaFiltro from '../lista/lista'
import OrdenaçãoAvaliados from '../lista/listaAvaliados'
import OrdenacaoPreco from '../lista/listaPreco'
import ValoresFiltro from '../valores/valores'
import filtro from '../../../assets/images/filtro/filtroBlanco.png'
import './index.scss'

export default function FiltroCtlg(props) {

    const {setFiltroPreco, 
        FiltroDestaque, 
        FiltroColecionador, 
        FiltroPromocao,
        OrdMaioresPrecos,
        OrdMenoresPrecos, 
        OrdMelhoresAvaliados,
        OrdPioresAvaliados,
        setFiltroEmpresa,
        setFiltroAvaliacao,
        setFiltroEstoque,
        setFiltroEstado,
        FiltroConsole,
        FiltroCD,
        FiltroFita,
        FiltroFliperama} = props;



    return (


        <div>


            <div className='card-filtro-ctlg'>

            <div className='titulo'>
                <div>
                <img src={filtro} className='filtro-card'></img>
                <h2>Ordenar Por</h2>    
                </div>
                <div className='linha'></div>
            </div>

            <div className='opc-selec'>

                <OrdenaçãoAvaliados 
                OrdMelhoresAvaliados={OrdMelhoresAvaliados}
                OrdPioresAvaliados={OrdPioresAvaliados}>
                </OrdenaçãoAvaliados>
                <OrdenacaoPreco 
                OrdMaioresPrecos={OrdMaioresPrecos}
                OrdMenoresPrecos={OrdMenoresPrecos}>   
                </OrdenacaoPreco>

            </div>


                <div className='titulo'>
                    <div>
                        <h2>Tipo de Produto</h2>
                    </div>
                    <div className='linha'></div>
                </div>

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
                    setFiltroEmpresa={setFiltroEmpresa}>    
                    </ListaFiltro>


                </div>


                <div className='titulo'>
                    <div>
                        <h2>Atributos</h2>
                    </div>
                    <div className='linha'></div>
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
                    <div className='linha'></div>
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
                        setFiltroEstoque={setFiltroEstoque}
                        >
                            
                    </ValoresFiltro>

                    <ValoresFiltro
                        item={'Avaliação'}
                        inter={'?'}
                        setFiltroAvaliacao={setFiltroAvaliacao}>
                    </ValoresFiltro>


                </div>



            </div>







        </div>


    )





}