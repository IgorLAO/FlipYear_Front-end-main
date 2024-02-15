import "./style.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import { ADMSearchUsers, GeAllUsers } from "../../../api/usuario";

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";
import searchIcon from '../../../ui/assets/images/NavBar_assets/lupa.png';
import filter from '../../../ui/assets/images/adm_assets/filter_icon 1.svg';

export default function Users_Consulta() {
    const [listUsusarios, setlistUsuarios] = useState([]);
    const [searchText, setsearchText] = useState('');
    const [selectdOptionStyle, setSelectdOptionStyle] = useState('');
    const [isHide_X, setisHide_X] = useState(false);
    const [IsHideFilterMenu, setIsHideFilterMenu] = useState(false);

    const Hide = () => {
        setIsHideFilterMenu(true);

        if (IsHideFilterMenu) {
            setIsHideFilterMenu(false);
        }
    }

    const HandleStyleSelected = (e) => {
        setSelectdOptionStyle("SelectedOption");
        setisHide_X(true);

        if (isHide_X && selectdOptionStyle && IsHideFilterMenu) {
            setSelectdOptionStyle("");
            setisHide_X(false);
        }
    }

    const GetUsers = async () => {
        const res = await GeAllUsers();
        const res2 = await ADMSearchUsers(searchText);

        console.log(res)
        
        if (searchText != '')
            setlistUsuarios(res2.data);

        else
            setlistUsuarios(res.data);
    }

    useEffect(() => {
        GetUsers();
    }, []);

    return (<div className="ADM_usersConsulta">
        <AdmTopNavBar />
        <div className="s">
            <Adm_leftNavBar />
    
            <div className="content">
                <h1> Buscar Usuario </h1>

                <span style={{ display: "flex", justifyContent: "center" }}>
                    <span className='searchBox'>
                        <img src={searchIcon} onClick={GetUsers} />
                        <input type="text" onChange={e => setsearchText(e.target.value)} />
                    </span>
                    <img
                        src={filter}
                        style={{ marginLeft: 10, marginTop: -40, width: 40 }}
                        onClick={Hide} />

                </span>
                {IsHideFilterMenu &&

                    <div className="Filters">
                        <div className="Tipos">
                            <span style={{ marginBottom: 10 }}>
                                <h4> tipo do produto </h4>
                                <hr />
                            </span>
                            <span className="options">

                                <span className="option" onClick={e => HandleStyleSelected(e.target.value)} id={selectdOptionStyle} >
                                    {isHide_X && <a style={{ marginRight: 5 }} > x </a>}  <a> Consoles </a>
                                </span>
                                <span className="option" onClick={e => HandleStyleSelected(e.target.value)} id={selectdOptionStyle}>
                                    {isHide_X && <a style={{ marginRight: 5 }} > x </a>}  a
                                </span>
                                <span className="option" onClick={e => HandleStyleSelected(e.target.value)} id={selectdOptionStyle}>
                                    {isHide_X && <a style={{ marginRight: 5 }} > x </a>}  aa
                                </span>
                                <span className="option" onClick={e => HandleStyleSelected(e.target.value)} id={selectdOptionStyle}>
                                    {isHide_X && <a style={{ marginRight: 5 }} > x </a>}  4354654654aa
                                </span>
                            </span>
                        </div>

                        <div className="Tipos">
                            <span style={{ marginBottom: 10 }}>
                                <h4> tipo do produto </h4>
                                <hr />
                            </span>
                            <span className="options">

                                <span className="option">
                                    x <a> Consoles </a>
                                </span>
                                <span className="option">
                                    x  a
                                </span>
                                <span className="option">
                                    x  aa
                                </span>
                                <span className="option">
                                    x  4354654654aa
                                </span>
                            </span>
                        </div>
                        <div className="Tipos">
                            <span style={{ marginBottom: 10 }}>
                                <h4> tipo do produto </h4>
                                <hr />
                            </span>
                            <span className="options">

                                <span className="option" id="">
                                    x <a> Consoles </a>
                                </span>
                                <span className="option">
                                    x  a
                                </span>
                                <span className="option">
                                    x  aa
                                </span>
                                <span className="option">
                                    x  4354654654aa
                                </span>
                            </span>
                        </div>

                    </div>
                }

                <table>
                    <colgroup>
                        <col style={{ width: 1 + '%' }} />
                        <col style={{ width: 15 + '%' }} />
                        <col style={{ width: 5 + '%' }} />
                        <col style={{ width: 10 + '%' }} />
                        <col style={{ width: 1 + '%' }} />
                        <col style={{ width: 1 + '%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome de usuario</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>compras</th>
                            <th> infos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsusarios.map((item) => (
                            <tr key={item.Id}>
                                <td>{item.Id || item.ID_USUARIO}</td>
                                <td>{item.Nome || item.NM_USUARIO}</td>
                                <td>{item.CPF || item.DS_CPF}</td>
                                <td>{item.Email || item.DS_EMAIL}</td>
                                <td>{item.idade}</td>
                                <td>
                                    <button>...</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}