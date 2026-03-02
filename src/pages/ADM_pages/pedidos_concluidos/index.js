import "./style.scss"

import { useEffect, useState } from "react";
import { GetAllPedidos } from "../../../api/pedidos";

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";
import StatusDisplay from "../../../ui/components/ADM_components/statusDisplay";

import searchIcon from '../../../ui/assets/images/NavBar_assets/lupa.png';
import filter from '../../../ui/assets/images/adm_assets/filter_icon 1.svg';
import Filter from "../../../ui/components/ADM_components/Filter";

export default function ADM_pedidos() {
    const [IsHideFilterMenu, setIsHideFilterMenu] = useState(false);
    const [IdSelect, setIdSelect] = useState();
    const [ListPedidos, setListPedidos] = useState([]);

    async function GetPedidos() {
        const data = await GetAllPedidos();
        setListPedidos(data.data);
        console.log(data)
    }

    const Hide = () => {
        setIsHideFilterMenu(true);

        if (IsHideFilterMenu) {
            setIsHideFilterMenu(false);
        }
    }

    useEffect(() => {
        GetPedidos();
    }, []);

    return (
        <>
            <span id="dp" style={{ display: 'none' }}>
                <StatusDisplay id={IdSelect} />
            </span>

            <div className="ADM_usersConsulta">
                <AdmTopNavBar />
                <div className="s">
                    <Adm_leftNavBar />
                    <div className="content">
                        <h1> Buscar Pedidos </h1>

                        <span style={{ display: "flex", justifyContent: "center" }}>
                            <span className='searchBox'>
                                <img src={searchIcon} />
                                <input type="text" />
                            </span>
                            <img
                                src={filter}
                                style={{ marginLeft: 10, marginTop: -40, width: 40 }}
                                onClick={Hide} />

                        </span>
                        {IsHideFilterMenu &&
                            <Filter />
                        }

                        <table>
                            <colgroup>
                                <col style={{ width: 1 + '%' }} />
                                <col style={{ width: 15 + '%' }} />
                                <col style={{ width: 10 + '%' }} />
                                <col style={{ width: 2 + '%' }} />
                                <col style={{ width: 5 + '%' }} />
                                <col style={{ width: 5 + '%' }} />
                                <col style={{ width: 0.1 + '%' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Pedido</th>
                                    <th>Data e Hora</th>
                                    <th> QTD </th>
                                    <th> Parcelas </th>
                                    <th> Nota Fiscal </th>
                                    <th> Status </th>
                                </tr>
                            </thead>
                            <tbody>
                                {ListPedidos.map((i, index) =>
                                    <tr key={index} >
                                        <td> {i.Id} </td>
                                        <td> {i.Pedido} </td>
                                        <td> {i.DataPedido} </td>
                                        <td> x69 </td>
                                        <td> {i.PARCELAS}x </td>
                                        <td> {i.Nota} </td>
                                        <td> <button onClick={() => { setIdSelect(i.Id); document.getElementById('dp').style.display = 'flex'; console.log(IdSelect) }}> ... </button> </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}