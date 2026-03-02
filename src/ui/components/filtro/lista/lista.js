import axios from "axios";

import { useEffect, useState } from "react";
import { GetAllProd } from "../../../../api/produtos";

export default function ListaFiltro(props) {

    const [selecX, setSelecX] = useState(false);
    const [buttonFundo, setButtonFundo] = useState('');
    const [buttonFonte, setButtonFonte] = useState('');

    const [estados, SetEstados] = useState([]);
    const [empresas, setEmpresas] = useState([]);

    const {setFiltroEmpresa, setFiltroEstado} = props;

    async function PuxarListagem() {

        let resp = await GetAllProd();
        let dados = resp.data;

        let pushEstado = '';
        let arrEstado = [];

        let pushEmpresa = '';
        let arrEmpresa = [];

        dados.map((item) => {

            if (item.TP_ESTADO !== pushEstado) {
                pushEstado = item.TP_ESTADO;
                arrEstado.push(pushEstado);

            }

            if (item.NM_FABRICANTE !== pushEmpresa) {
                pushEmpresa = item.NM_FABRICANTE;
                arrEmpresa.push(pushEmpresa)

            }
        });

        let copiaArrEstado = [... new Set(arrEstado)]
        let copiaArrEmpresa = [... new Set(arrEmpresa)]



        SetEstados(copiaArrEstado);
        setEmpresas(copiaArrEmpresa);

    }

    function filtrarEmpresa(e){

        setFiltroEmpresa(e.target.value)


    }

    function filtrarEstado(e){

        setFiltroEstado(e.target.value)


    }

    function Selecionado() {

        setSelecX((current) => !current);

        if (selecX == false) {

            setButtonFonte('white');
            setButtonFundo('#413E3E');


        }

        else {

            setButtonFonte('');
            setButtonFundo('');


        }



    }

    useEffect(() => {

        PuxarListagem();
    }, [])

    switch (props.item) {

        case 'Empresa':
            return <select className='empresa' style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}` }} 
            onClick={Selecionado}
            onChange={filtrarEmpresa}>

                <option>{props.item}</option>
                {


                    empresas.map((it) =>

                        <option>{it}</option>


                    )

                }
            </select>

        case 'Estado':
            return <select className='empresa' style={{ backgroundColor: `${buttonFundo}`, color: `${buttonFonte}` }} 
            onClick={Selecionado}
            onChange={filtrarEstado}>

                <option>{props.item}</option>
                {


                    estados.map((it) =>

                        <option>{it}</option>


                    )

                }
            </select>

     


    }




}


