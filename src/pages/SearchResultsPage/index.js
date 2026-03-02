  import './index.scss';
import Rodape from '../../ui/components/rodape/index.js';
import CardProdutoCtlg from '../../ui/components/card-produto-ctlg';

import axios from 'axios';
import { GetSearchProd } from '../../api/produtos';
import NavBar from '../../ui/components/navBar';

import { useEffect, useState } from 'react';
import localStorage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import FiltroCtlg from '../../ui/components/filtro/filtro-ctlg';

export default function SearchResults(props) {
    const [list, setList] = useState([]);
    const [ValueS, setValueS] = useState('');
    const navigate = useNavigate('');
    

    const GetProds = async () => {
        let infos = localStorage('SearchValue');
        setValueS(infos);
        let res = await GetSearchProd(infos);

        setList(res.data);
    }


    useEffect(() => {
        GetProds();
        if(!localStorage('SearchValue')){
            navigate('/')
        }   
    }, [])

    return (
        <>
            <div className="container-ctlg">
                <NavBar/>
                <h1 className='exib'>Exibindo todos os resultados para "{ValueS}"</h1>
                <div className='resultados-ctlg'>

                <FiltroCtlg></FiltroCtlg>

                <div  iv className='resultados'>
                    {list?.map((item) => <>
                        <CardProdutoCtlg
                            preco={item.Preco} 
                            nome={item.Nome} precoPromocao={item.Promo} 
                            promocao={item.IsPromo} avaliacao={item.Avaliacao}
                            fabricante={item.Fabricante}
                            estado={item.Estado}
                            colecionador={item.Colecionador}
                            />
             
                    </>)}
                </div>
                </div>

                <div className='paginacao'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p> {">"} </p>
                </div>
                <Rodape/>


            </div>

        </>
    )
}