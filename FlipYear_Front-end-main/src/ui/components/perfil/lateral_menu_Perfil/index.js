import "./style.scss";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import storage from 'local-storage';

import MenuIcon from "../../../assets/images/adm_assets/menuIcon.png";
import Mail from "../../../assets/images/adm_assets/mail.png";
import clockIcon from "../../../assets/images/adm_assets/relogio.png";
import logOutIcon from "../../../assets/images/adm_assets/logOut.png";
import Home from "../../../assets/images/perfil-side-bar/Home.png";

export default function SideBarUsers() {
    const [splitNav, setSplitNav] = useState();
    const navigate = useNavigate();

    const logOut = () => {
        storage.remove('NORMAL_USER_Logado');
        navigate('/login');
    }

    return (
        <>
            <div className="MainUsers_bar">
                <span className="btns">
                    <div className="MenuHeader">
                        <img src={MenuIcon} />
                        <h1> Menu </h1>
                    </div>

                    <div className="Options">
                        <span className="">
                            <Link to="/">
                                <div>
                                    <img src={Home} />
                                    <h4> Home </h4>
                                </div>
                            </Link>

                            <Link>
                                <div>
                                    <img src={Mail} />
                                    <h4> Caixa de Entrada </h4>
                                </div>
                            </Link>

                            <Link to="ADM_Pedidos">
                                <div>
                                    <img src={clockIcon} />
                                    <h4> Pedidos Pendentes </h4>
                                </div>
                            </Link>

                        </span>
                    </div>

                    <div className="LogOut" onClick={logOut}>
                        <img src={logOutIcon} />
                        <h4> Sair</h4>
                    </div>

                </span>
            </div>
        </>
    );
}