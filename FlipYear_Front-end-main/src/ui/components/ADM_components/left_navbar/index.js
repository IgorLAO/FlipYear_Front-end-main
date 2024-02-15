import "./style.scss";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import storage from 'local-storage';


import MenuIcon from "../../../assets/images/adm_assets/menuIcon.png";
import Mail from "../../../assets/images/adm_assets/mail.png";
import penIcon from "../../../assets/images/adm_assets/pen.png";
import searchIcon from "../../../assets/images/adm_assets/lupa.png";
import clockIcon from "../../../assets/images/adm_assets/relogio.png";
import userIcon from "../../../assets/images/adm_assets/group.png";
import statisticsIcon from "../../../assets/images/adm_assets/estatisticasADM_icon.png";
import logOutIcon from "../../../assets/images/adm_assets/logOut.png";
import Home from "../../../assets/images/adm_assets/home.png";

export default function Adm_leftNavBar() {

    const navigate = useNavigate();

    const logOut = () => {
        storage.remove('ADM_Logado');
        navigate('/login');
    }

    return (
        <div style={{ width: 80 }}>
            <div className="MainAdm_leftNavbar">
                <span className="btns">

                    <div className="MenuHeader">
                        <img src={MenuIcon} />
                        <h1> Menu </h1>
                    </div>


                    <div className="Options">
                        <span className="">
                            <div onClick={() => navigate('/ADM')}>
                                <img src={Home} />
                                <h4> Home </h4>
                            </div>

                            <div onClick={() => navigate('/caixa')}>
                                <img style={{width: '25px'}} src={Mail} />
                                <h4> Mensagens </h4>
                            </div>

                            <div onClick={() => navigate('/ADM_Produtos')}>
                                <img src={searchIcon} />
                                <h4> Produtos </h4>
                            </div>

                            <div onClick={() => navigate('/ADM_RegistroProd')}>
                                <img style={{width: '25px', transform: 'scaleX(-1)'}} src={penIcon} />
                                <h4> Registro </h4>
                            </div>

                            <div onClick={() => navigate('/ADM_Users')}>
                                <img src={userIcon} />
                                <h4> Usuarios </h4>
                            </div>


                            <div onClick={() => navigate('/ADM_Pedidos')}>
                                <img src={clockIcon} />
                                <h4> Pedidos Pendentes </h4>
                            </div>


                            <div onClick={() => navigate('/ADM_estatisticas')}>
                                <img src={statisticsIcon} />
                                <h4> Estatísticas</h4>
                            </div>
                        </span>
                    </div>

                    <div className="LogOut" onClick={logOut}>
                        <img src={logOutIcon} />
                        <h4> Sair</h4>
                    </div>

                </span>
            </div>
        </div>
    );
}