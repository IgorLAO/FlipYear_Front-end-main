import "./index.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import localStorage from "local-storage";

import CartStatus from "../CartStatus";
import LogoArcade from "../../assets/images/NavBar_assets/arcade_Logo 1.png";
import Lupa from "../../assets/images/NavBar_assets/lupa.png";
import Filtro from "../../assets/images/NavBar_assets/filtro_logo.png";
import Suporte from "../../assets/images/NavBar_assets/suporte_logo.png";
import Usuario from "../../assets/images/NavBar_assets/usuario_logo.png";
import SideBarFazerConta from '../perfil/side-bar'
import SideBarLogado from "../perfil/side-bar-logado";
import PopUpCarrinho from "../popupCarrinho";
import SearchCard from "../SearchCards/cardBusca";
import SearchCard_NotFound from "../SearchCards/NotFoundCard";
import FiltroCard from "../filtro";

import SearchResults from "../../../pages/SearchResultsPage";
import { GetSearchProd } from "../../../api/produtos";
import Menu from "../../assets/images/Vector.png";



export default function NavBar(props) {
    const navigate = useNavigate('');
    const [menuLateralHidden, setMenuLateralHidden] = useState();
    const [logado, setLogado] = useState(false);
    const [popUpCarro, setPopUpCarro] = useState(false);
    const [popUpFiltro, setPopUpFiltro] = useState(false);
    const [tamanhoSearch, setTamanhoSearch] = useState('')

    const [NomeUser, setNomeUser] = useState('');
    const [searchRes, SetSearchRes] = useState([]);
    const [SearchValue, setSearchValue] = useState('');
    const [Erro, setErro] = useState('');
    const [limit, setLimit] = useState(5);
    const [IshideNotFound, setIshideNotFound] = useState(false);

    const Mostrar = () => {
        if (localStorage("ADM_Logado") || localStorage("NORMAL_USER_Logado")) {
            setLogado(true);
        }
        else {
            setMenuLateralHidden(true);
        }
    }

    function mostrarCarrinho() {
        setPopUpCarro((current) => !current);
    }

    function MostrarFiltro() {
        setPopUpFiltro((current) => !current);

    }

    const GetSearchRes = async (e) => {
        setSearchValue(e.target.value);
        setTamanhoSearch(e.target.value.length);

    }

    const NavTo = (e) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            navigate('/catalogo');
            localStorage('SearchValue', SearchValue);
            window.location.reload();
        }
    }

    function NavToHome() {
        navigate('/');
    }

    function processoCompra(item) {
        navigate(`/produto/${item.i.Id}`)
        window.location.reload();
        window.scrollTo(0, 0);
    }

    function HandleHide() {
        document.getElementById("sR").style.display = "none"
    }

    function Navsuport() {
        navigate('/Suporte');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (tamanhoSearch > 0) {
                    let res = await GetSearchProd(SearchValue);
                    SetSearchRes(res.data);
                    if (res === 'nada') {
                        setIshideNotFound(true);
                        document.getElementById('sR').style.display = 'flex';

                    }
                    if (res !== 'nada') {
                        document.getElementById('sR').style.display = 'flex';
                        setIshideNotFound(false);
                    }
                } else{
                    setIshideNotFound(false);
                    SetSearchRes([]);
                    document.getElementById('sR').style.display = 'none';
                }
    
                
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                
            }
        };
    
        fetchData(); 
    
    
    }, [SearchValue, tamanhoSearch, IshideNotFound])


    const { setFiltroPreco,
        FiltroDestaque,
        FiltroColecionador,
        FiltroPromocao,
        setFiltroEmpresa,
        setFiltroAvaliacao,
        setFiltroEstoque,
        setFiltroEstado,
        FiltroConsole,
        FiltroCD,
        FiltroFita,
        FiltroFliperama } = props;


    return (
        <>

            <div className="Nav">
                <header className="">
                    <div onClick={NavToHome} className="Logo">
                        <img src={LogoArcade} />
                        <h3> Flip-Year
                            <h1>2000</h1>
                        </h3>
                    </div>
                    <span className="Options">
                        {
                            (!logado)
                                ? <h3 style={{ color: '#fff' }}>faça o login {'>'}</h3>
                                :
                                <></>
                        }
                        <img id="menu" src={Menu} onClick={() => {
                            const element = document.getElementById('respOP');
                            const elementMenu = document.getElementById('menu');
                            if (element.style.display == 'flex') { element.style.display = 'none'; elementMenu.classList.add = 'mostrar' }
                            else { element.style.display = 'flex' }

                        }} />

                        <span id="respOP" style={{ display: 'none' }}>
                            <span>

                            <img src={Usuario} onClick={Mostrar} />
                            <span style={{ cursor: 'pointer' }}>
                                <CartStatus mostrarCarrinho={mostrarCarrinho} />
                            </span>
                            <img onClick={Navsuport} src={Suporte} />
                            </span>
                        </span>
                    </span>

                </header>

                <span className="SearchBox">
                    <span className="boxInput">
                        <img src={Lupa} />
                        <input className="foda"
                            type="text"
                            value={SearchValue}
                            placeholder="Oque esta buscando?"
                            onChange={GetSearchRes}
                            onKeyDown={NavTo}
                            onBlur={HandleHide} />

                        <img src={Filtro}
                            className="filtro"
                            onClick={MostrarFiltro} />

                    </span>

                    {
                        (popUpFiltro == true)

                            ? <FiltroCard
                                popUpFiltro={popUpFiltro}
                                setPopUpFiltro={setPopUpFiltro}
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
                                FiltroFliperama={FiltroFliperama}></FiltroCard>
                            : <></>

                    }
                </span>
                <span id="op" className="Options">
                    <img src={Usuario} onClick={Mostrar} />
                    <span style={{ cursor: 'pointer' }}>
                        <CartStatus mostrarCarrinho={mostrarCarrinho} />
                    </span>
                    <img onClick={Navsuport} src={Suporte} />
                </span>


                {
                    (menuLateralHidden === true)
                        ? <SideBarFazerConta setLogado={setLogado} setMenuLateralHidden={setMenuLateralHidden} />
                        : <></>
                }

                {
                    (logado === true)
                        ? <SideBarLogado setLogado={setLogado} setMenuLateralHidden={setMenuLateralHidden} /> : <></>
                }

                {
                    (popUpCarro === true)
                        ? <PopUpCarrinho setPopUpCarro={setPopUpCarro} /> : <></>
                }

                {(popUpCarro == true) ?
                    <PopUpCarrinho setPopUpCarro={setPopUpCarro} />
                    :
                    <></>
                }

            </div>

            <div className="searchResults" id="sR" style={{ display: 'none' }}>

                {
                    (IshideNotFound == true)
                        ? <SearchCard_NotFound />
                        : <>
                                        {searchRes.slice(0, limit).map((i) => 
                (
                        <SearchCard i={i}/>
                ))}</>
                }





            </div>
        </>
    )
}