import "./style.scss"

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Delete, GetAllProd, GetSearchProd } from "../../../api/produtos";

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";

import searchIcon from '../../../ui/assets/images/NavBar_assets/lupa.png';
import filter from '../../../ui/assets/images/adm_assets/filter_icon 1.svg';
import Filter from "../../../ui/components/ADM_components/Filter";
import MoreOP from "../../../ui/components/ADM_components/MoreOP";
import penIcon from "../../../ui/assets/images/adm_assets/pen.png";
import RegistroProdutos from "../registro_produto";

import localStorage from "local-storage";

export default function Produtos_ConsultaADM() {
    const navigate = useNavigate('');


    async function Alterar(item) {
        navigate('/ADM_RegistroProd');
        localStorage('idAlt', item);
    }

    const [listProdutos, setListProdutos] = useState([]);
    const [IsHideFilterMenu, setIsHideFilterMenu] = useState(false);
    const [WidthDisplay, setWidthDisplay] = useState(0);
    const [Display, setDisplay] = useState('none');
    const [expandedItems, setExpandedItems] = useState([]);
    const [Error, setError] = useState('');

    const [SrchParams, setSrchParams] = useState('');

    const Hide = () => {
        setIsHideFilterMenu(true);

        if (IsHideFilterMenu) {
            setIsHideFilterMenu(false);
        }
    }

    async function GetProducts() {
        try {
            const res = await GetAllProd();
            const res2 = await GetSearchProd(SrchParams);

            if (SrchParams != '') {
                setListProdutos(res2);
                console.log(listProdutos, 'Res2')

            }

            else {
                setListProdutos(res.data);
            }


        } catch (err) {
            console.log(err);
            setError(`Parece Meio Vazio`);
        }
    }

    async function DeleteItem(id) {
        let i = await Delete(id);
        GetProducts();
        console.log(i)
    }


    useEffect(() => {
        GetProducts();
    }, []);


    return (
        <>
            <div className="ADM_usersConsulta">
                <AdmTopNavBar />
                <div className="s">
                    <Adm_leftNavBar />
                    <div className="content">
                        <h1> Buscar Produtos </h1>

                        <span style={{ display: "flex", justifyContent: "center" }}>
                            <span className='searchBox'>
                                <img onClick={GetProducts} src={searchIcon} />

                                <input type="text" onChange={e => setSrchParams(e.target.value)} />
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
                                <col style={{ width: 5 + '%' }} />
                                <col style={{ width: 10 + '%' }} />
                                <col style={{ width: 1 + '%' }} />
                                <col style={{ width: 1 + '%' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Produto</th>
                                    <th>QTD</th>
                                    <th>Categoria</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listProdutos.map((item, i) => (
                                    <tr key={item.id}>
                                        <td> {item.Id || item.ID_PRODUTO} </td>
                                        <td>{item.Nome || item.NM_PRODUTO}</td>
                                        <td>{item.Qtd_estq || item.QTD_ESTOQUE}</td>
                                        <td>{item.Categoria || item.NM_CATEGORIA}</td>
                                        <td> R${item.Preco || item.VL_PRECO}</td>
                                        <td>
                                            <span style={{ display: 'flex' }}>
                                                <img onClick={() => Alterar(item.ID_PRODUTO)} style={{ width: '15px', objectFit: 'contain', marginRight: '15px' }} src={penIcon} id="pen" />

                                                <h1 onClick={() => DeleteItem(item.Id || item.ID_PRODUTO)} id="x" > X </h1>
                                            </span>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h3 style={{ color: '#fff' }}>
                            {Error}
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}