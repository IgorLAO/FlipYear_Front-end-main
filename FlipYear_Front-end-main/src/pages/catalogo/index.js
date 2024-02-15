import './index.scss';
import Rodape from '../../ui/components/rodape/index.js';
import CardProdutoCtlg from '../../ui/components/card-produto-ctlg';
import Fantasma1 from '../../ui/assets/images/catalogo_assets/ghost 1.png'
import Fantasma2 from '../../ui/assets/images/perfil-side-bar/fantasma4.png'
import localStorage from 'local-storage';
import { useEffect, useState } from 'react';
import NavBar from '../../ui/components/navBar';
import { GetAllProd } from '../../api/produtos';
import { GetSearchProd } from '../../api/produtos';
import FiltroCtlg from '../../ui/components/filtro/filtro-ctlg';

export default function Catalogo() {

    const [list, setList] = useState([]);
    const [ValueS, setValueS] = useState('');
    const [notfoundSwitch, setNotFoundSwitch] = useState(false);
    const [backupArr, setBackupArr] = useState([]);
    const [prodPorPag, setProdPorPag] = useState(18);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [setaAvancar, setSetaAvancar] = useState(true);
    const [setaRetornar, setSetaRetornar] = useState(false);


    const [filtroColecionadorSwitch, setFiltroColecionadorSwitch] = useState(false);
    const [filtroPromocaoSwitch, setFiltroPromocaoSwitch] = useState(false);
    const [filtroDestaqueSwitch, setFiltroDestaqueSwitch] = useState(false);
    const [filtroConsoleSwitch, setFiltroConsoleSwitch] = useState(false);
    const [filtroFliperamaSwitch, setFiltroFliperamaSwitch] = useState(false);
    const [filtroFitaSwitch, setFiltroFitaSwitch] = useState(false);
    const [filtroCDSwitch, setFiltroCDSwitch] = useState(false);

    const [filtroEmpresa, setFiltroEmpresa] = useState('Empresa');
    const [filtroEstado, setFiltroEstado] = useState('Estado')
    const [filtroPreco, setFiltroPreco] = useState({
        inicial: '',
        final: ''
    })
    const [filtroAvaliacao, setFiltroAvaliacao] = useState({
        inicial: '',
        final: ''
    })
    const [filtroEstoque, setFiltroEstoque] = useState({
        inicial: '',
        final: ''
    })






    function filtrarResultados() {
        let filtro = [...backupArr];

        if (filtroPromocaoSwitch)
            filtro = filtro.filter(item => item.BT_PROMOCAO == true);

        if (filtroColecionadorSwitch) {
            filtro = filtro.filter(item => item.TP_COLECIONADOR == true);
        }

        if (filtroDestaqueSwitch) {
            filtro = filtro.filter(item => item.BT_DESTAQUE == true)
        }

        //se n por no bd desse jeito eles n vao funcionar

        if (filtroConsoleSwitch) {
            filtro = filtro.filter(item => item.NM_CATEGORIA == 'Console')
        }

        if (filtroCDSwitch) {
            filtro = filtro.filter(item => item.NM_CATEGORIA == 'CD')
        }

        if (filtroFliperamaSwitch) {
            filtro = filtro.filter(item => item.NM_CATEGORIA == 'Fliperama')
        }

        if (filtroFitaSwitch) {
            filtro = filtro.filter(item => item.NM_CATEGORIA == 'Fita')

        }

        if (filtroPreco.inicial !== '' && filtroPreco.final !== '') {
            filtro = filtro.filter(item => item.BT_PROMOCAO == true &&
                item.VL_PRECO_PROMOCIONAL >= filtroPreco.inicial &&
                item.VL_PRECO_PROMOCIONAL <= filtroPreco.final ||
                item.BT_PROMOCAO == false &&
                item.VL_PRECO >= filtroPreco.inicial &&
                item.VL_PRECO <= filtroPreco.final)

        }

        if (filtroAvaliacao.inicial !== '' && filtroAvaliacao.final !== '') {
            filtro = filtro.filter(item => item.VL_AVALIACAO >= filtroAvaliacao.inicial && item.VL_AVALIACAO <= filtroAvaliacao.final)
        }

        if (filtroEstoque.inicial !== '' && filtroEstoque.final !== "") {
            filtro = filtro.filter(item => item.QTD_ESTOQUE >= filtroEstoque.inicial && item.QTD_ESTOQUE <= filtroEstoque.final)
        }

        if (filtroEmpresa !== 'Empresa') {
            filtro = filtro.filter(item => item.NM_FABRICANTE == filtroEmpresa)
        }

        if (filtroEstado !== 'Estado') {
            filtro = filtro.filter(item => item.TP_ESTADO == filtroEstado)
        }


        setList(filtro);
    }



    const GetProds = async () => {
        let infos = localStorage('SearchValue');
        setValueS(infos);



        let res = await GetSearchProd(infos);


        if (res !== 'nada') {
            setList(res.data);
            setBackupArr(res.data);

        }

        else {
            setNotFoundSwitch(true);
        }






    }

    function OrdMelhoresAvaliados() {
        const melhoresAval = [...list].sort((a, b) => a.VL_AVALIACAO - b.VL_AVALIACAO);
        setList(melhoresAval);

    }

    function OrdPioresAvaliados() {
        const pioresAval = [...list].sort((a, b) => b.VL_AVALIACAO - a.VL_AVALIACAO);
        setList(pioresAval);

    }


    function OrdMaioresPrecos() {

        const maioresPrecos = [...list].sort((a, b) => {
            if (a.BT_PROMOCAO == true && b.BT_PROMOCAO == true) return a.VL_PRECO_PROMOCIONAL - b.VL_PRECO_PROMOCIONAL
            if (a.BT_PROMOCAO == true && b.BT_PROMOCAO == false) return a.VL_PRECO_PROMOCIONAL - b.VL_PRECO
            if (a.BT_PROMOCAO == false && b.BT_PROMOCAO == true) return a.VL_PRECO - b.VL_PRECO_PROMOCIONAL
            if (a.BT_PROMOCAO == false && b.BT_PROMOCAO == false) return a.VL_PRECO - b.VL_PRECO


        });
        setList(maioresPrecos);

    }

    function OrdMenoresPrecos() {


        const menoresPrecos = [...list].sort((a, b) => {

            if (a.BT_PROMOCAO == true && b.BT_PROMOCAO == true) return b.VL_PRECO_PROMOCIONAL - a.VL_PRECO_PROMOCIONAL
            if (a.BT_PROMOCAO == true && b.BT_PROMOCAO == false) return b.VL_PRECO - a.VL_PRECO_PROMOCIONAL
            if (a.BT_PROMOCAO == false && b.BT_PROMOCAO == true) return b.VL_PRECO_PROMOCIONAL - a.VL_PRECO
            if (a.BT_PROMOCAO == false && b.BT_PROMOCAO == false) return b.VL_PRECO - a.VL_PRECO

        });

        setList(menoresPrecos);

    }


    function FiltroColecionador() {
        setFiltroColecionadorSwitch(!filtroColecionadorSwitch);
    }

    function FiltroPromocao() {
        setFiltroPromocaoSwitch(!filtroPromocaoSwitch);
    }
    function FiltroDestaque() {
        setFiltroDestaqueSwitch(!filtroDestaqueSwitch);
    }

    function FiltroConsole() {
        setFiltroConsoleSwitch(!filtroConsoleSwitch);
    }

    function FiltroCD() {
        setFiltroCDSwitch(!filtroCDSwitch);
    }

    function FiltroFita() {
        setFiltroFitaSwitch(!filtroFitaSwitch);
    }

    function FiltroFliperama() {
        setFiltroFliperamaSwitch(!filtroFliperamaSwitch)
    }


    useEffect(() => {
        GetProds();

    }, [ValueS, notfoundSwitch])

    useEffect(() => {
        filtrarResultados();
    }, [filtroColecionadorSwitch,
        filtroPromocaoSwitch,
        filtroDestaqueSwitch,
        filtroPreco,
        filtroEmpresa,
        filtroAvaliacao,
        filtroEstoque,
        filtroEstado,
        filtroConsoleSwitch,
        filtroCDSwitch,
        filtroFitaSwitch,
        filtroFliperamaSwitch]);


    const indexUltimoProd = paginaAtual * prodPorPag;
    const indexPrimeiroProd = indexUltimoProd - prodPorPag;
    const prodsAtuais = list.slice(indexPrimeiroProd, indexUltimoProd);
    const numPagina = [];

    for (let i = 1; i <= Math.ceil(list.length / prodPorPag); i++) {
        numPagina.push(i)
    }



    useEffect(() => {
        if (paginaAtual !== 1) {
            setSetaRetornar(true);
        } else {
            setSetaRetornar(false);
        }


        if (paginaAtual === numPagina.length || prodsAtuais <= 0) {
            setSetaAvancar(false);
        } else {
            setSetaAvancar(true);
        }
    }, [paginaAtual, numPagina.length, prodsAtuais]);

    const paginar = (item) => {
        setPaginaAtual(item);
    };

    const Avancar = () => {
        if (paginaAtual < numPagina.length) {
            setPaginaAtual((prevPagina) => prevPagina + 1);
        }
    };

    const Retornar = () => {
        if (paginaAtual > 1) {
            setPaginaAtual((prevPagina) => prevPagina - 1);
        }
    };

    async function aa() {
        let res = await GetAllProd();
        console.log(res)
    }


    return (
        <>
            <NavBar
                FiltroColecionador={FiltroColecionador}
                FiltroPromocao={FiltroPromocao}
                FiltroDestaque={FiltroDestaque}
                setFiltroPreco={setFiltroPreco}
                setFiltroEmpresa={setFiltroEmpresa}
                setFiltroEstado={setFiltroEstado}
                setFiltroAvaliacao={setFiltroAvaliacao}
                setFiltroEstoque={setFiltroEstoque}
                FiltroConsole={FiltroConsole}
                FiltroCD={FiltroCD}
                FiltroFita={FiltroFita}
                FiltroFliperama={FiltroFliperama}
            />

            <div className="container-ctlg">
                <h1 className='ctlg'>Catálogo

                </h1>

                {
                    (ValueS !== '')
                        ? <h1 className='exib'>Exibindo todos os resultados para "{ValueS}"</h1>
                        : <></>
                }


                <div className='resultados-ctlg'>
                    <div className='filtro-opc'>

                        {(notfoundSwitch == false)

                            ? <FiltroCtlg
                                OrdMelhoresAvaliados={OrdMelhoresAvaliados}
                                OrdPioresAvaliados={OrdPioresAvaliados}
                                OrdMaioresPrecos={OrdMaioresPrecos}
                                OrdMenoresPrecos={OrdMenoresPrecos}
                                FiltroColecionador={FiltroColecionador}
                                FiltroPromocao={FiltroPromocao}
                                FiltroDestaque={FiltroDestaque}
                                setFiltroPreco={setFiltroPreco}
                                setFiltroEmpresa={setFiltroEmpresa}
                                setFiltroEstado={setFiltroEstado}
                                setFiltroAvaliacao={setFiltroAvaliacao}
                                setFiltroEstoque={setFiltroEstoque}
                                FiltroConsole={FiltroConsole}
                                FiltroCD={FiltroCD}
                                FiltroFita={FiltroFita}
                                FiltroFliperama={FiltroFliperama}
                            >
                            </FiltroCtlg>
                            : <></>
                        }


                    </div>

                    {
                        (notfoundSwitch == true)
                            ? <div className='vazio'>
                                <img src={Fantasma2} className='fantasma2' alt='fantasma2'></img>
                                <p>Nenhum Produto Encontrado :{`(`}</p>
                                <img src={Fantasma1} className='fantasma1' alt='fantasma1'></img>
                            </div>
                            : <>
                                <div className='produtos-result'>

                                    {prodsAtuais.map((item) => <>
                                        <CardProdutoCtlg
                                            idProduto={item.ID_PRODUTO}
                                            preco={item.VL_PRECO}
                                            nome={item.NM_PRODUTO}
                                            fabricante={item.NM_FABRICANTE}
                                            precoPromocao={item.VL_PRECO_PROMOCIONAL}
                                            estado={item.TP_ESTADO}
                                            promocao={item.BT_PROMOCAO}
                                            avaliacao={item.VL_AVALIACAO}
                                            colecionador={item.TP_COLECIONADOR}
                                            imgs={{
                                                ImgFrente: item.FRENTE,
                                                ImgTras: item.TRAS,
                                                ImgLadoDir: item.LADO_DIREI,
                                                ImgLadoEsq: item.LADO_ESQ,
                                            }}
                                        />
                                    </>)}
                                </div></>
                    }
                </div>


                <div className='paginacao'>

                    {
                        (setaRetornar == true)

                            ? <p onClick={Retornar}> {"<"} </p>
                            : <></>

                    }


                    {numPagina.map(item =>
                        (numPagina == paginaAtual)

                            ? <p onClick={() => paginar(item)} style={{ color: '#00FF57' }}>{item}</p>
                            : <p onClick={() => paginar(item)}>{item}</p>


                    )}

                    {
                        (setaAvancar == true)
                            ? <p onClick={Avancar}> {">"} </p>
                            : <></>

                    }




                </div>

            </div>



            <Rodape></Rodape>

        </>
    )
}