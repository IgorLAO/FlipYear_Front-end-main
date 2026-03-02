import "./style.scss"

import { useEffect, useState } from 'react'

import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";

import camera from "../../../ui/assets/images/adm_assets/camera_icon.png"
import { ConsultarProdPorId, GetAllProd, Getcatego, InsertProd, InsertProdImages } from "../../../api/produtos";
import { useLocation } from "react-router-dom";

export default function RegistroProdutos(props) {
    const [qtd, setQtd] = useState(0);
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [IdImg, setIdImg] = useState(0);
    const [precoPromo, setPrecoPromo] = useState(0);
    const [Promo, setPromo] = useState(false);
    const [destaque, setDestaque] = useState(false);
    const [categoria, setCategoria] = useState([]);
    
    const [AltData, setAltData] = useState([]);

    const [categoriaId, setCategoriaId] = useState();
    const [disponivel, setDisponivel] = useState(false)
    const [Colecionador, setColecionador] = useState(false)
    const [estoque, setEstoque] = useState(1);
    const [detalhes, setDetalhes] = useState('');
    const [avaliacao, setAvaliacao] = useState(5);
    const [fabricante, setFabricante] = useState('');
    const [Estado, setEstado] = useState('');

    const [Frente, setFrente] = useState();
    const [LadoDir, setLadoDir] = useState();
    const [LadoEsq, setLadoEsq] = useState();
    const [Tras, setTras] = useState();


    
    let Idcategoria = 3

    async function InsertProdInfos(IdImg) {

        try {
            let d = await InsertProd({
                Idcategoria: categoriaId,
                IdImg: IdImg,
                nome: nome,
                preco: preco,
                precoPromocao: precoPromo,
                destaque: destaque,
                promocao: Promo,
                disponivel: disponivel,
                estoque: estoque,
                detalhes: detalhes,
                avaliacao: avaliacao,
                fabricante: fabricante,
                estado: Estado,
                colecionador: Colecionador,
            });

        } catch (err) {
            console.log(err.message)
        }
    }

    async function HandleCategoria() {
        const data = await Getcatego();
        setCategoria(data.data)
        console.log(data)

    }

    function imagesPreview() {
        const imageUrl = URL.createObjectURL(Frente);
        return imageUrl
    }

    function imgLadoEsq() {
        const imageUrl = URL.createObjectURL(LadoEsq);
        return imageUrl
    }

    function imgLadoDir() {
        const imageUrl = URL.createObjectURL(LadoDir);
        return imageUrl
    }

    function imgTras() {
        const imageUrl = URL.createObjectURL(Tras);
        return imageUrl
    }

    async function insertA() {

        const imgs = {
            Frente,
            LadoEsq,
            LadoDir,
            Tras,
        }

        const data1 = await InsertProdImages(imgs);
        const insertedImageId = data1.data.insertId;

        await InsertProdInfos(insertedImageId);

        console.log(ConsultarProdPorId( localStorage('idAlt')) )
    }
        // console.log(data1)
        // setAltData(data);


    
    useEffect(() => {
        HandleCategoria();
        // receiveAltData();
   
    }, []);

    return (
        <div className="MainRegistroADM">
            <AdmTopNavBar />

            <div className="s">
                <Adm_leftNavBar />

                <div className="content2">
                    <span className="Title">
                        <h1> Inserir Produto </h1>
                    </span>

                    <section>
                        <div className="inputs">
                   
                            <label>
                                <a>Nome</a>
                                <input type="text" onChange={e => setNome(e.target.value)} />
                            </label>
                            <span style={{ display: 'flex' }}>
                                <label style={{ marginRight: '15px', width: '100%' }}>
                                    <a>Preço</a>
                                    <input type="text" onChange={e => setPreco(e.target.value)} />
                                </label>
                                <label style={{ width: '100%' }}>
                                    <a>Preco Promocional</a>
                                    <input type="text" onChange={e => setPrecoPromo(e.target.value)} />
                                </label>
                            </span>

                            <label>
                                <a> Fabricante </a>
                                <input type="text" onChange={e => setFabricante(e.target.value)} />
                            </label>
                            <span style={{ display: 'flex', width: '100%' }}>
                                <label style={{ marginRight: '15px', width: '100%' }}>
                                    <a> Estoque </a>
                                    <input type="number" onChange={e => setEstoque(e.target.value)} />
                                </label>
                                <label style={{ width: '100%' }}>
                                    <a>Avaliação</a>
                                    <input type="number" onChange={e => setAvaliacao(e.target.value)} />
                                </label>
                            </span>
                            <span className='selects' style={{ display: 'flex' }}>
                                <label style={{ width: '100%' }}>
                                    <a>Estado</a>
                                    <select onChange={e => setEstado(e.target.value)}>
                                        <option> Selecione uma categoria </option>
                                        <option> Seminovo </option>
                                        <option> Novo </option>
                                        <option> Quebrado </option>
                                    </select>
                                </label>

                                <label style={{ width: '100%' }}>
                                    <a>Categoria</a>
                                    <select onChange={e => setCategoriaId(e.target.selectedIndex)}>
                                        <option> Selecione uma categoria </option>
                                        {categoria.map((item, index) => (
                                            <option key={index}> {item.NM_CATEGORIA} </option>
                                        ))}
                                    </select>
                                </label>

                            </span>
                            <span style={{ display: 'flex' }}>
                                <label>
                                    <a>Destaque</a>
                                    <input type="radio" onChange={() => setDestaque(true)} />
                                </label>
                                <label>
                                    <a>Promoção</a>
                                    <input type="radio" onChange={() => setPromo(true)} />
                                </label>
                            </span>
                            <span style={{ display: 'flex' }}>

                                <label>
                                    <a>Disponivel</a>
                                    <input type="radio" onChange={() => setDisponivel(true)} />
                                </label>
                                <label>
                                    <a>Colecionador</a>
                                    <input type="radio" onChange={() => setColecionador(true)} />
                                </label>
                            </span>
                            detalhes
                            <textarea onChange={(e) => setDetalhes(e.target.value)} style={{ maxWidth: '750px', maxHeight: '300px' }} />
                        </div>

                        <div className="Imgs">
                            <div className="Preview">
                                {Frente ?
                                    <img src={imagesPreview()} style={{ objectFit: 'contain', maxWidth: '350px' }} />
                                    :
                                    <img src={camera} style={{objectFit: 'contain'}}/>
                                }
                            </div>
                            <div className="InputsFiles">
                                <span className="img1" title="Frente" onClick={() => document.getElementById('img1').click()}>
                                    <input type="file" id="img1" onChange={(e) => setFrente(e.target.files[0])} />
                                    <h1>+</h1>
                                </span>
                                <span className="img2" title="Traseira" onClick={() => document.getElementById('img2').click()}>
                                    <input type="file" id="img2" onChange={(e) => setTras(e.target.files[0])} />
                                    {Tras ?
                                        <img src={imgTras()} style={{ objectFit: 'contain', maxWidth: '50px' }} />
                                        :
                                        <h1>+</h1>
                                    }
                                </span>
                                <span className="img3" title="Lado Direito" onClick={() => document.getElementById('img3').click()}>
                                    <input type="file" id="img3" onChange={(e) => setLadoDir(e.target.files[0])} />
                                    {LadoDir ?
                                        <img src={imgLadoDir()} style={{ objectFit: 'contain', maxWidth: '50px' }} />
                                        :
                                        <h1>+</h1>
                                    }
                                </span>
                                <span className="img4" title="Lado Esquerdo" onClick={() => document.getElementById('img4').click()}>
                                    <input type="file" id="img4" onChange={(e) => setLadoEsq(e.target.files[0])} />
                                    {LadoEsq
                                        ?
                                        <img src={imgLadoEsq()} style={{ objectFit: 'contain', maxWidth: '50px' }} />
                                        :
                                        <h1>+</h1>
                                    }
                                </span>
                            </div>


                            <div className='button' onClick={insertA}>
                                <span style={{ display: "flex", position: "absolute" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="255" height="71" viewBox="0 0 255 71" fill="none">
                                        <g opacity="0.5">
                                            <rect x="7.7168" y="9.87891" width="242.508" height="51.5709" fill="#429B56" />
                                            <rect x="3" y="12.1875" width="4.71698" height="47.7813" fill="#429B56" />
                                            <rect x="14.7656" y="5" width="230.392" height="7.22369" fill="#429B56" />
                                            <rect x="245.23" y="12.1875" width="7.76915" height="46.4632" fill="#429B56" />
                                            <rect x="14.7656" y="58.7773" width="230.392" height="7.22369" fill="#429B56" />
                                        </g>
                                        <g filter="url(#filter0_d_348_45)">
                                            <rect x="14.7188" y="12.4219" width="227.604" height="46.1566" fill="#429B56" />
                                            <rect x="10.293" y="14.4883" width="4.42708" height="42.7649" fill="#429B56" />
                                            <rect x="20.9707" y="10.2109" width="216.667" height="4.27649" fill="#429B56" />
                                            <rect x="237.637" y="14.4883" width="7.29167" height="41.5852" fill="#429B56" />
                                            <rect x="20.9707" y="56.0742" width="216.667" height="4.42395" fill="#429B56" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_348_45" x="0.292969" y="0.210938" width="254.635" height="70.2891" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="5" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_348_45" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_348_45" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg></span>
                                <a>
                                    Enviar
                                </a>
                            </div>
                        </div>

                    </section>

                </div>
            </div>

        </div>);
}