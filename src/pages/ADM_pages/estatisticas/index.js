import "./style.scss";

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


export default function Estatisticas() {
    const [listPed, setListPed] = useState([]);
    const [QtdJogos, setQtdJogos] = useState(0);
    const [QtdConsoles, setQtdConsoles] = useState(0);
    const [QtdFliperamas, setQtdFliperamas] = useState(0);
    const [QtdColeItems, setQtdColeItems] = useState(0);

    const [Start, setStart] = useState(0);
    const [End, setEnd] = useState(0);


    async function GetPedidosInterval() {
        if (Start && End) {

            let Infos = {
                Start: String(Start),
                End: String(End),
            }

            console.log(Infos);
            const d = await axios.get('http://129.148.42.252:5010/pedidosInterval', { params: Infos });

            setListPed(d.data);
            console.log(d.data);
        }
    }

    function table() {
        let JogoCount = 0
        let ItCount = 0
        let ConsoleCount = 0
        let FlipCount = 0


        listPed.map((item) => {
            if (item.Situacao === "Concluído" || item.Situacao === "Entregue") {
                console.log(item);
                if (item.Categoria === 'Fliperama')
                    FlipCount += 1

                setQtdFliperamas(FlipCount);

                if (item.Categoria === 'Items Colecionaveis') {
                    ItCount += 1

                    setQtdColeItems(ItCount);
                }

                if (item.Categoria === 'Jogo') {
                    JogoCount += 1

                    setQtdJogos(JogoCount);
                }

                if (item.Categoria === 'Console') {
                    ConsoleCount += 1

                    setQtdConsoles(ConsoleCount);
                }
            }
        });
    }

    async function GetUsers(){
        
    }

    useEffect(() => {

        table()
    }, [table])


    const data = [
        {
            name: 'Consoles',
            Vendas: QtdConsoles,
            amt: 2000,
        },
        {
            name: 'Jogos',
            Vendas: QtdJogos,
            amt: 2210,
        },
        {
            name: 'Fliperamas',
            Vendas: QtdFliperamas,
            amt: 2290,
        },
        {
            name: 'Items Colecionaveis',
            Vendas: QtdColeItems,
            amt: 2000,
        },
    ];

    const PerfilInfos = [
        {
            subject: 'Math',
            A: 120,
            B: 110,
            fullMark: 150,
        },
        {
            subject: 'Chinese',
            A: 98,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'English',
            A: 86,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Geography',
            A: 99,
            B: 100,
            fullMark: 150,
        },
        {
            subject: 'Physics',
            A: 85,
            B: 90,
            fullMark: 150,
        },
        {
            subject: 'History',
            A: 65,
            B: 85,
            fullMark: 150,
        },
    ];

    return (
        <div className="ADM_Estatisticas">
            <AdmTopNavBar />
            <section >
                <div className="s">
                    <Adm_leftNavBar />
                    <div className="content">
                        <div className="dataRange">
                            <div>
                                <span>
                                    <a>Intervalo</a>
                                </span>

                                <span>
                                    <a>Começo: </a>
                                    <input type="date" onChange={e => { setStart(e.target.value); console.log(Start) }} />

                                </span>

                                <span>
                                    <a>Final:</a>
                                    <input type="date" onChange={e => { setEnd(e.target.value); console.log(End) }} />

                                </span>
                            </div>
                            <button onClick={GetPedidosInterval}> Aplicar </button>
                        </div>

                        <span className="Title" style={{ marginBottom: '50px' }}>
                            <h1> Estatisticas </h1>
                            <hr style={{ width: '100%' }} />
                        </span>

                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={300}
                                height={200}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="Vendas" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>

                        <span className="Title" style={{ marginBottom: '50px' }}>
                            <h1> Usuarios </h1>
                            <hr style={{ width: '100%' }} />
                        </span>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={PerfilInfos}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>
        </div>
    );
}