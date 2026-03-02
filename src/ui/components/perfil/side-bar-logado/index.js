import './index.scss'

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import localStorage from 'local-storage';

import Carrinho from '../../../assets/images/perfil-pessoal/image-removebg-preview (8) 2.png';
import Pfp from '../../../assets/images/perfil-publico_assets/download 2.png';
import Lapis from '../../../assets/images/adm_assets/pen.png';
import Adm from '../../../assets/images/perfil-side-bar/usuario icon.png';
import Seta from '../../../assets/images/perfil-side-bar/setapabaixo.png';
import Logo from '../../../assets/images/perfil-side-bar/arcade_Logo 21.png';
import Checkbox from '../../../assets/images/perfil-side-bar/checkbox(correct).png';
import Uncheckbox from '../../../assets/images/perfil-side-bar/checkbox(incorrect).png';
import User from '../../../assets/images/adm_assets/user.png';
import Atari from '../../../assets/images/imagesCardProduto/nintendo_Console-removebg-preview 102.png';
import Controle from '../../../assets/images/perfil-side-bar/controle-removebg-preview.png';
import Users from '../../../assets/images/adm_assets/group.png';
import Grafico from '../../../assets/images/adm_assets/estatisticasADM_icon.png';
import Caminhao from '../../../assets/images/status_produtos_assets/caminhao_icon.png';
import Registro from '../../../assets/images/adm_assets/pen.png';
import produto from '../../../assets/images/adm_assets/lupa.png';



export default function SideBarLogado({ setMenuLateralHidden, setLogado, setFundoEscurecido }) {
    const [isHideAdmOpt, SetIsHideAdmOpt] = useState(false);
    const [IsHideOrders, SetIsHideOrders] = useState(true);
    const [NavTo, SetNavTo] = useState(false);
    const [NomeUser, setNomeUser] = useState('');

    const navigate = useNavigate();

    const [selectPerfil, setSelectPerfil] = useState(false);

    const [menuPedidos, setMenuPedidos] = useState(false);
    const [menuADM, setMenuADM] = useState(false);
    const [setaLado, setSetaLado] = useState('-90');
    const [fundoTopo, setFundoTopo] = useState('');
    const [corFonte, setCorFonte] = useState('white');
    const [coresHover, setCoresHover] = useState({
        fonte: '',
        fundo: '',
        seta: '-90'
    });

    function renderCssPedidos() {
        setFundoTopo('#88C070')
        setCorFonte('black');
    }

    function UnrenderCssPedidos() {
        setFundoTopo('');
        setCorFonte('white')

        if (menuPedidos == true) {
            renderCssPedidos();

        }
    }

    function ListarPedidos() {
        setMenuPedidos((current) => !current);
        
        if (menuPedidos == true) {
            setSetaLado('-90');
            setFundoTopo('#88c070af')
            setCorFonte('black');
            
        }   else {
            setSetaLado('0');
            UnrenderCssPedidos();
        }
    }

    function renderCssADM() {
        setMenuADM((current) => !current);

        if (coresHover.seta != '0') {
            if (menuADM == false) {
                let obj = {
                    fonte: 'black',
                    fundo: '#88C070',
                    seta: '-90'

                }
                setCoresHover(obj);
            }

            else {
                let obj = {
                    fonte: 'white',
                    fundo: '#081820',
                    seta: '-90',
                }

                setCoresHover(obj);
            }
        }
    }

    function Condeu() {
        setMenuLateralHidden(false);
        setLogado(false);
        document.body.style.overflow = 'unset';

    }

    function PagADM() {
        setCoresHover({
            fonte: 'black',
            fundo: '#88C070',
            seta: '0'
        });

        if (coresHover.seta == 0) {

            setCoresHover({
                fonte: 'white',
                fundo: '#000',
                seta: '-90'
            });
        }
    }



    useEffect(() => {
        if (localStorage("ADM_Logado")) {
            SetIsHideAdmOpt(true);
            SetIsHideOrders(false);
            SetNavTo('/ADM');
            const infos = localStorage('ADM_Logado');
            setNomeUser(infos.data.Nome);

        } else {
            SetNavTo('/perfil-pessoal');
            const infos = localStorage('NORMAL_USER_Logado');
            setNomeUser(infos.data.Nome);

        }
    }, []);


    document.body.style.overflow = 'hidden';

    return (
        <>
            <div className='MainSide'>
                <div className="escurecer-fundo" onClick={Condeu}></div>
                <div className='side-bar-logado'>

                    <p className='fechar-sb' onClick={Condeu}>X</p>

                    <div className='pfp-nome'>
                        <div className='foto'>
                            <img src={Pfp}></img>
                        </div>
                        <p className='nome-side-bar'>{NomeUser}</p>

                    </div>

                    <div className='menu-side-bar'>
                        <div className='linha-side-bar'></div>
                        <Link to={NavTo}>
                            <div  className='item-side-bar' id='editar-perfil'>
                                <img style={{width: '20px', objectFit: 'contain'}} src={Lapis} className='lapis'></img>
                                <p >Editar Perfil</p>
                        
                            </div>
                        </Link>

                        <div className='linha-side-bar'></div>
                        {IsHideOrders &&
                            <div className='item-side-bar' onMouseEnter={renderCssPedidos} onMouseLeave={UnrenderCssPedidos} style={{ backgroundColor: `${fundoTopo}`, color: `${corFonte}` }}>
                                <img src={Carrinho} className='carrinho-side-bar'></img>
                                <p>Meus Pedidos</p>
                                <img src={Seta} style={{ transform: `rotate(${setaLado}deg)` }} className='seta-baixo' onClick={ListarPedidos}></img>
                        
                            </div>
                        }

                        <div className='linha-side-bar'></div>
                        {menuPedidos &&

                            <div className='lista-pedidos'>
                                <div className='pedido'>
                                    <div className='fundo-atari'>
                                        <img className='Atari' src={Atari}></img>

                                    </div>
                                    <p className='prod-nome'>ATARI 3000</p>
                                    <img className='status-sidebar' src={Checkbox}></img>

                                </div>
                                <div className='linha-side-bar'></div>

                                <div className='pedido'>
                                    <div className='fundo-atari'>
                                        <img className='Atari' src={Atari}></img>
                                    </div>
                                    <p className='prod-nome'>ATARI 3000</p>
                                    <img className='status-sidebar' src=''></img>
                                </div>
                                <div className='linha-side-bar'></div>

                                <div className='pedido'>
                                    <div className='fundo-atari'>
                                        <img className='Atari' src={Atari}></img>
                                    </div>
                                    <p className='prod-nome'>ATARI 3000</p>
                                    <img className='status-sidebar' src={Uncheckbox}></img>
                                </div>
                                <div className='linha-side-bar'></div>
                                <div className='see-more'>
                                    <Link to='/perfil-pessoal'>
                                        <p>Ver Mais...</p>
                                    </Link>
                                    <div className='logo-sb-pedidos'>

                                        <img src={Logo} />
                                        <p>FLIP-YEAR</p>
                                        <p className='doisk'>2000</p>

                                    </div>
                                </div>
                            </div>
                        }

                        {(menuPedidos == false)
                            ?
                            (isHideAdmOpt &&
                                <div>
                                    <div onClick={PagADM} className='item-side-bar'
                                        onMouseEnter={() => renderCssADM()}
                                        onMouseLeave={() => renderCssADM()}

                                        style={{ backgroundColor: `${coresHover.fundo}`, color: `${coresHover.fonte}`, cursor: 'pointer' }}>
                                        <img src={User} className='adm'></img>
                                        <p >Administrador</p>

                                        <img src={Seta} className='seta-baixo' style={{ transform: `rotate(${coresHover.seta}deg)` }} ></img>
                                    </div>

                                    <div className='linha-side-bar'></div>

                                </div>
                            )
                            : <></>
                        }

                        {
                            (coresHover.seta == 0)
                                ?
                                <div className='adm-menu'>
                                    <div onClick={() => navigate('/ADM_estatisticas')} className='rota-adm'>
                                        <p>Perfil de Adm</p>
                                        <img style={{width: '30px',objectFit: 'contain'}} src={User}></img>
                                    </div>

                                    <div className='linha-side-bar'></div>

                                    <div onClick={() => navigate('/ADM_estatisticas')} className='rota-adm'>
                                        <p>Produtos</p>
                                        <img style={{width: '30px',objectFit: 'contain'}} src={produto}> </img>
                                    </div>

                                    <div className='linha-side-bar'></div>

                                    <div onClick={() => navigate('/ADM_estatisticas')} className='rota-adm'>
                                        <p>Usuários</p>
                                        <img style={{width: '30px',objectFit: 'contain'}} src={Users}></img>
                                    </div>

                                    <div className='linha-side-bar'></div>

                                    <div onClick={() => navigate('/ADM_estatisticas')} className='rota-adm'>
                                        <p>Estatíscas</p>
                                        <img style={{width: '40px',objectFit: 'contain'}} src={Grafico}></img>
                                    </div>

                                    <div className='linha-side-bar'></div>

                                    <div onClick={() => navigate('/ADM_estatisticas')} className='rota-adm'>
                                        <p>Pedidos</p>
                                        <img style={{width: '30px',objectFit: 'contain'}} src={Caminhao}></img>
                                    </div>

                                    <div className='linha-side-bar'></div>

                                    <div onClick={() => navigate('/ADM_estatisticas')} className='rota-adm'>
                                        <p>Registro Produto</p>
                                        <img style={{width: '30px',objectFit: 'contain'}} src={Registro}></img>

                                    </div>
                                    <div className='linha-side-bar'></div>

                                    <div className='logo' id='adm-logo'>

                                        <img src={Logo} />
                                        <p>FLIP-YEAR</p>
                                        <p className='doisk'>2000</p>
                                    </div>

                                </div>

                                : <></>
                        }

                        <div className='logo' id='adm-logo'>
                            <img src={Logo} />
                            <p>FLIP-YEAR</p>
                            <p className='doisk'>2000</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}