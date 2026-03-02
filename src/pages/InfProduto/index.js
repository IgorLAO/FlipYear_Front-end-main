import { Link, Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from 'moment';

import localStorage from "local-storage";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';

import './index.scss'

import Usuario from "../../ui/assets/images/NavBar_assets/usuario_logo.png";
import yum from '../../ui/assets/images/imageExamples/super_famicon_yum.png'
import yum_costa from '../../ui/assets/images/imageExamples/yum game_tras 1.png'
import yum_fita from '../../ui/assets/images/imageExamples/yum fita_frente 1.png'
import hermes from '../../ui/assets/images/compraPage_assets/hermes_express.png'
import red_star from '../../ui/assets/images/compraPage_assets/re_star_company.png'
import seta from '../../ui/assets/images/compraPage_assets/seta.png'
import NavBar from "../../ui/components/navBar"
import Comments from "../../ui/components/comments";
import Produtos from '../../ui/components/produtos'
import Report from "../../ui/components/report";
import CardProdutoCtlg from "../../ui/components/card-produto-ctlg";
import Rodape from "../../ui/components/rodape";

import { ConsultarProdPorId, GetAllCmts, GetAllProd, GetCmtsPage, InsertComments, ProdsImg, GetUrlImage } from "../../api/produtos";
import { GetUserById } from "../../api/usuario";
import server from "../../api/server";
import axios from "axios";
// import { Toastify } from "toastify";
// import { ToastContainer } from "react-toastify";

export default function InfProduto() {
    const navigate = useNavigate();

    const [qtdProdutos, SetQtdProdutos] = useState(1);
    const [limiteQtd, setLimiteQtd] = useState();
    const [idUser, setIdUser] = useState(1);

    const [isHideOptions, setIsHideOptions] = useState(false);
    const [ang, setAng] = useState('0');
    const [hideBuyOptions, setHideBuyOptions] = useState('');

    const [comments, setComments] = useState([]);
    const [allProducts, SetAllProducts] = useState([]);
    let [parcela, SetParcela] = useState(0);
    const [produto, setProduto] = useState({});
    const { idParam } = useParams();
    const [dateNow, setDateNow] = useState(moment(new Date).format('YYYY/MM/DD'))
    const [commentContent, setCommentContent] = useState('')
    const [commentLikes, setCommentLikes] = useState(0)
    const [commentReport, setCommentReport] = useState(false);
    const [CardResposiveLimit, setCardResposiveLimit] = useState(1);

    const [commentsPagAtual, setCommentsPagAtual] = useState(1)
    const [commentsPerPag, setCommentsPerPag] = useState(2)
    const [setaAvancarComments, setSetaAvancarComments] = useState(true)
    const [setaRetornarComments, setSetaRetornarComments] = useState(false)
    const [commentsProd, setCommentsProd] = useState([]);
    const [cep, setCep] = useState('');
    const [respCep, setRespCep] = useState('');
    const [FreteSelecionado, setFreteSelecionado] = useState([]);

    const [Frente, setFrente] = useState('');
    const [LadoDir, setLadoDir] = useState('');
    const [LadoEsq, setLadoEsq] = useState('');
    const [Tras, setTras] = useState('');

    const indexUltimoComment = commentsPagAtual * commentsPerPag;
    const indexPrimeiroComments = indexUltimoComment - commentsPerPag;
    const commentsAtuais = commentsProd.slice(indexPrimeiroComments, indexUltimoComment)
    const numPagComments = []

    for (let i = 1; i <= Math.ceil(commentsProd.length / commentsPerPag); i++) {
        numPagComments.push(i)
    }

    function sla() {
        // Filtra os comentários que correspondem ao produto atual
        const commentsForProduct = comments.filter(comment => comment.PRODUTO === idParam);

        // Define os comentários filtrados no estado
        setCommentsProd(commentsForProduct);
    }

    function AddQtdProduto() {
        SetQtdProdutos(qtdProdutos + 1);
        if (qtdProdutos >= limiteQtd) {
            SetQtdProdutos(limiteQtd);

        }
    }

    function ProdutoAdicionado() {
        // toast.success("Produto Adicionado ao Carrinho!")

    }

    function ErroAdicionarProduto() {
        // toast.error("Produto Não Adicionado ao Carrinho");

    }

    function MinusQtdProduto() {
        SetQtdProdutos(qtdProdutos - 1);

        if (qtdProdutos == 1) {
            SetQtdProdutos(1);

        }
    }

    async function imgFrente(IMG) {
        setFrente(GetUrlImage(IMG));
    }

    async function imgLadoDir(IMG) {
        setLadoDir(GetUrlImage(IMG));
    }

    async function imgLadoEsq(IMG) {
        setLadoEsq(GetUrlImage(IMG));
    }

    async function imgTras(IMG) {
        setTras(GetUrlImage(IMG));
    }

    async function ListImagesById(){
        let J = Number(idParam)

        let i = await ConsultarProdPorId(J)

        imgFrente(i.FRENTE);
        imgLadoDir(i.LADO_DIRE);
        imgLadoEsq(i.LADO_ESQ)
        imgTras(i.TRAS)
        
    }

    function ResposiveCards() {
        const t = window.innerWidth
        console.log(t)
        if(t< 700) setCardResposiveLimit(1)
        else if (t < 950) setCardResposiveLimit(2);
        else if (t < 1420) setCardResposiveLimit(3)

        else setCardResposiveLimit(4);
    }

    async function AddNoCarrinho() {
        if (qtdProdutos >= 1) {
            let resposta = await axios.post('http://129.148.42.252:5010/carrinho', {
                usuario: idUser,
                produto: idParam,
                qtd: qtdProdutos
            });

            let limite = limiteQtd - qtdProdutos;
            setLimiteQtd(limiteQtd - qtdProdutos);

            if (qtdProdutos > limite) {
                SetQtdProdutos(limite);
            }

            ProdutoAdicionado();

        }

        else {
            ErroAdicionarProduto();

        }
    }

    useEffect(() => {

        sla()

        if (commentsPagAtual !== 1) {
            setSetaRetornarComments(true);
        } else {
            setSetaRetornarComments(false);
        }

        if (commentsAtuais === numPagComments.length) {
            setSetaAvancarComments(false);
        } else {
            setSetaAvancarComments(true);
        }
    }, []);

    const paginaComments = (item) => {
        setCommentsPagAtual(item);
    };

    const AvancarComments = () => {
        if (commentsPagAtual < numPagComments.length) {
            setCommentsPagAtual((prevPag) => prevPag + 1);
        }
    };

    const RetornarComments = () => {
        if (commentsPagAtual > 1) {
            setCommentsPagAtual((prevPag) => prevPag - 1);
        }
    };

    async function ConsultarCep() {
        if (cep.length > 7) {
            try {
                const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                if (resp.status === 200) {
                    setRespCep('Cep encontrado!');
                }
            } catch (err) {
                setRespCep('Não encontrado');
            }
        }
        else {
            setRespCep('');
        }

    }


    useEffect(() => {
        ConsultarCep();
        ListImagesById()
    }, [cep]);


    async function CarregarProdutos() {
        const resp = await ConsultarProdPorId(idParam);
        setLimiteQtd(limiteQtd);
        setProduto(resp);

    }

    // async function InserirProdutoNoCarrinho(){
    //     const resp = await InserirProdutoNoCarrinho(idproduto, idUser, qtdProduto);

    // }

    function parcelas() {
        const valorParcelas = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.VL_PRECO / 10);
        SetParcela(valorParcelas);
    }

      function processPag25(Frete) {
        Frete = FreteSelecionado
        if (Frete != 0 && respCep === 'Cep encontrado!'){
            navigate(`/pagamento25/${idParam}/${qtdProdutos}/${Frete}`);
        } else {
            alert(`Preencha os campos`);
        }
        
    }

    function FreteHermes() {
        setFreteSelecionado(15);
    }

    function FreteRedStart() {
        setFreteSelecionado(25);
    }

    async function GetAllComments() {

        try {
            let res = await GetAllCmts();
            let t = (res.data);
    
            setComments(t)
            
        } catch (error) {
            console.log(error)
        }

    }

    async function GetAllProduttc() {
        let res = await GetAllProd()

        let data = (res.data)
        SetAllProducts(data)
    }



    async function InserirCommentarioEnter(e) {
        if (e.key == 'Enter') {

            let resp = await InsertComments(idUser, idParam, commentContent, dateNow, commentLikes, commentReport)
            window.location.reload()
        }
    }


    //async function GetImgs() {
    //    let res = await ProdsImg(idParam)
    //    let data = res.data
//
    //    setFrente(data[0].FRENTE)
    //    setLadoDir(data[0].LADO_DIRE)
    //    setLadoEsq(data[0].LADO_ESQ)
    //    setTras(data[0].TRAS)
//
    //}

//    <div className="other-products">
//    <div className="ot-tittle">
//        <h1>Outros Produtos</h1>
//    </div>
//
//
//    <div className="products">
//
//        <Produtos CardResposiveLimit={CardResposiveLimit}
//            products={allProducts}/>
//
//
//    </div>
//</div>

    useEffect(() => {
        ResposiveCards()
    }, [])




    function hideValid(freteType) {
        setIsHideOptions(true);
        setHideBuyOptions('none');
        setAng('90');

        if (isHideOptions) {
            setIsHideOptions(false);
            setHideBuyOptions('flex');
            setAng('0');
        }
    }



    useEffect(() => {
        CarregarProdutos();
        //GetAllProduttc();
        GetAllComments();

    }, []);
    return (
        <div className="pagina-produto">
            <NavBar />
            <div className="infos">


                <div className="imagem">


                    <Swiper navigation={true} slidesPerView={1} modules={[Navigation]} className="mySwiper2">

                        <SwiperSlide>
                            <div className="a">
                            <img src={Frente} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="a">
                            <img src={Tras} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="a">
                            <img src={LadoDir} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="a">
                            <img src={LadoEsq} alt="" />
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>

                <div className="compra">
                    <div className="nome-produto">
                        <div id="tituloProd">
                            <h1>{produto.NM_PRODUTO}</h1>
                        </div>

                        <div id="linha"></div>
                    </div>

                    <div className="estado">
                        <p>{produto.TP_ESTADO}</p>
                    </div>

                    {produto.BT_PROMOCAO == true

                        ? <div className="preco">
                            <h3>R${produto.VL_PRECO}</h3>
                            <h2>R${produto.VL_PRECO_PROMOCIONAL}</h2>
                            <p>Ou 10x de {parcela}</p>
                            <div></div>
                        </div>

                        : <div className="preco">
                            <h2>R${produto.VL_PRECO}</h2>
                            <p>Ou 10x de {parcela}</p>
                            <div></div>
                        </div>
                    }

                    <div className="frete">
                        <label for="CEP"> <h4>Onde entregar?</h4> </label>

                        <div className="search-bar">
                            <input id="CEP" type="cep" placeholder="Digite seu CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
                        </div>
                        <p style={{ padding: "7px" }}>{respCep}</p>
                    </div>



                    <div className="envio">
                        <span onClick={hideValid} style={{ display: "flex", cursor: "pointer", textAlign: "center" }}>
                            <h4 > Opções de Entrega </h4>
                            <a style={{ transform: `rotate(${ang}deg)`, marginLeft: 7 }}>  {'>'} </a>
                        </span>
                        {isHideOptions &&
                            <>
                                <div className="tipo-envio">
                                    <div className="env-hermes">
                                        <button
                                            onClick={FreteHermes}>
                                            <div>
                                                <img src={hermes} alt="" />
                                                <h4>Hermes Express</h4>
                                            </div>

                                            <div>
                                                <p>Receba em até 5 dias úteis</p>
                                                <p>R$15,00</p>
                                            </div>

                                        </button>
                                    </div>

                                    <div className="linha2"></div>

                                    <div className="env-star">
                                        <button
                                            onClick={FreteRedStart}>
                                            <div >
                                                <img src={red_star} alt="" />
                                                <h4>Red Star Company</h4>
                                            </div>

                                            <div>
                                                <p>Receba em até 2 dias úteis</p>
                                                <p>R$25,00</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                    <div className="buttons" style={{ display: `${hideBuyOptions}` }}>
                        <button id="button-compra" onClick={processPag25}>Compre já</button>
                        <div className="carrinho">
                            <button id="button-carrinho" onClick={AddNoCarrinho}>Adicionar ao Carrinho
                            </button>
                            <div className="contador">
                        <p className='hover-opt' onClick={AddQtdProduto} style={{rotate: '-90deg', fontSize: '14px'}}>{'>'}</p>
                        <p >{qtdProdutos}</p>
                        <p className='hover-opt' onClick={MinusQtdProduto} style={{ rotate:  '90deg', fontSize: '14px'}}>{'>'}</p>
                    </div>
                </div>
                        </div>
                    </div>


            </div>

            <div className="product-details">
                <div className="linha">
                    <h1>Sobre</h1>
                </div>
                <p>{produto.DS_DETALHES}</p>
                {/* <p>Yam Yam é um jogo de tiro em 3D com elementos de RPG, onde um garoto-toupeira chamado Magu Magu e seu animal de estimação, Yam Yam, embarcam em uma aventura por 28 missões. Eles viajam entre vilas, enfrentando fases de tiro em 3D para derrotar monstros, ganhar pontos de experiência e coletar recompensas. O jogo apresenta elementos de RPG, como comprar equipamentos e completar tarefas nas vilas, mas reseta o progresso do personagem após cada missão, como se fosse um sonho.</p> */}
            </div>

            <div className="comments-area">
                <h1>Avaliações</h1>

                <div className="escrita">
                    <img src={Usuario} alt="" />
                    <input type="text" value={commentContent} onChange={e => setCommentContent(e.target.value)} onKeyDown={InserirCommentarioEnter} placeholder="Deixe um comentário" />
                </div>


                <div>
                    {comments.map((item) =>
                        <Comments
                            Nome={item.NOME}
                            Produto={item.PRODUTO}
                            Data={item.PUBLICACAO}
                            Conteudo={item.COMENTARIO}
                            Likes={item.LIKES}
                            idParam={idParam}
                        />
                    )}
                </div>



                
            </div>




            <Rodape />
        </div>
    )
}