import './index.scss'

import { Link, Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Usuario from "../../ui/assets/images/NavBar_assets/usuario_logo.png";
import bat from "../../ui/assets/images/Home_assets/pixel_bat.png";
import yum from '../../ui/assets/images/imageExamples/super_famicon_yum.png'
import yum_costa from '../../ui/assets/images/imageExamples/yum game_tras 1.png'
import yum_fita from '../../ui/assets/images/imageExamples/yum fita_frente 1.png'
import hermes from '../../ui/assets/images/compraPage_assets/hermes_express.png'
import red_star from '../../ui/assets/images/compraPage_assets/re_star_company.png'
import seta from '../../ui/assets/images/compraPage_assets/seta.png'
import NavBar from "../../ui/components/navBar"
import Comments from "../../ui/components/comments";
import Produtos from '../../ui/components/produtos'
import CardProdutoCtlg from "../../ui/components/card-produto-ctlg";
import Rodape from "../../ui/components/rodape";

import { ConsultarProdPorId, GetAllCmts, GetAllProd, GetCmtsPage } from "../../api/produtos";
import { GetUserById } from "../../api/usuario";

export default function Castlevania() {
    const navigate = useNavigate();

    const [isHideOptions, setIsHideOptions] = useState(false);
    const [ang, setAng] = useState('0');
    const [hideBuyOptions, setHideBuyOptions] = useState('');
    const [IsHideReportPopUp, setIsHideReportPopUp] = useState(false);

    const [comments, setComments] = useState([]);
    const [allProducts, SetAllProducts] = useState([]);
    const [parcela, SetParcela] = useState(0)
    const [produto, setProduto] = useState({});
    const { idParam } = useParams();

    const [commentsPagAtual, setCommentsPagAtual] = useState(1)
    const [commentsPerPag, setCommentsPerPag] = useState(4)
    const [setaAvancarComments, setSetaAvancarComments] = useState(true)
    const [setaRetornarComments, setSetaRetornarComments] = useState(false)
    const [commentsProd, setCommentsProd] = useState([])

    const indexUltimoComment = commentsPagAtual * commentsPerPag;
    const indexPrimeiroComments = indexUltimoComment - commentsPerPag;
    const commentsAtuais = commentsProd.slice(indexPrimeiroComments, indexUltimoComment)
    const numPagComments = []

    for (let i = 1; i <= Math.ceil(commentsProd.length / commentsPerPag); i++) {
        numPagComments.push(i)
    }

    function sla() {
        if (comments.PRODUTO === idParam) {
            setCommentsProd([...comments])
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
    }, [commentsAtuais, numPagComments.length]);

    const paginarComments = (item) => {
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



    // async function CarregarProdutos() {
    //     const resp = await ConsultarProdPorId(idParam);
    //     setProduto(resp);
    // }

    // // async function InserirProdutoNoCarrinho(){
    // //     const resp = await InserirProdutoNoCarrinho(idproduto, idUser, qtdProduto);

    // // }
    // function parcelas() {
    //     const parcela = produto.VL_PRECO / 10
    //     SetParcela(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parcela));
    // }

    function processPag25() {
        navigate(`/pagamento25/${idParam}`);
    }
    //peguei o id_produto do catálogo e joguei aqui


    // async function GetAllComments() {
    //     let res = await GetAllCmts();
    //     let t = (res.data);

    //     setComments(t)
    // }


    // async function GetAllProduttc() {
    //     let res = await GetAllProd()

    //     let data = (res.data)
    //     SetAllProducts(data)
    // }


    function hideValid() {
        setIsHideOptions(true)
        setHideBuyOptions('none')
        setAng('90')

        if (isHideOptions) {
            setIsHideOptions(false);
            setHideBuyOptions('flex')
            setAng('0')
        }
    }

    // useEffect(() => {
    //     CarregarProdutos();
    //     parcelas()
    //     GetAllProduttc()
    //     GetAllComments()
    // }, [parcela]);

    return (
        <>
            <div id='batsSlide' style={{ display: 'none' }}>

                <img src={bat} style={{ margin: '50px' }} alt="" id='bats1' />
                <img src={bat} alt="" id='bats2' />
                <img src={bat} alt="" id='bats3' />

             

            </div>
            <div id='batsSlideFast' style={{ display: 'none' }}>

<img src={bat} style={{ margin: '50px' }} alt="" id='bats1' />
<img src={bat} alt="" id='bats2' />
<img src={bat} alt="" id='bats3' />

</div>

            <div className="Castlevania">
                <NavBar />
                <div className="infos">
                    <div className="txt-img">
                        <div className="imgs-produto">
                            <div className="mini-imgs">
                                <div className="mini-img">
                                    <img src={yum} alt="" />
                                </div>

                                <div className="mini-img">
                                    <img src={yum_costa} alt="" />
                                </div>

                                <div className="mini-img">
                                    <img id="fita" src={yum_fita} alt="" />
                                </div>

                                <div className="mini-img">
                                    <img src={yum} alt="" />
                                </div>
                            </div>
                            <div className="div_imagem">
                                <div className="imagem">
                                    <img src={yum} alt="" />
                                    <span>
                                        <img src={bat} alt="" id='bats' />
                                        <img src={bat} alt="" id='bats2' />
                                        <img src={bat} alt="" id='bats3' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="compra">
                        <div className="nome-produto">
                            <h1>Castlevania</h1>
                            <div></div>
                        </div>

                        <div className="estado">
                            <p style={{ color: '#000' }}>Usado</p>
                        </div>

                        <div className="preco">
                            <h2>R${'200,00'}</h2>
                            <p>Ou 10x de {parcela}</p>
                            <div></div>
                        </div>

                        <div className="frete">
                            <label for="CEP"> <h4>Onde entregar?</h4> </label>

                            <div className="search-bar">
                                <input id="CEP" type="text" placeholder="Digite seu CEP" style={{ color: '#fff' }} />
                            </div>
                        </div>



                        <div className="envio">
                            <span onClick={hideValid} style={{ display: "flex", cursor: "pointer", textAlign: "center" }}>
                                <h4 style={{ color: '#000' }} > Opções de Entrega </h4>
                                <a style={{ transform: `rotate(${ang}deg)`, marginLeft: 7 }}>  {'>'} </a>
                            </span>
                            {isHideOptions &&
                                <>
                                    <div className="tipo-envio">
                                        <div className="env-hermes">
                                            <button>
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
                                            <button>
                                                <div>
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
                            <button
                                id="button-compra"
                                style={{ border: 'solid #000' }}
                                onClick={() => {
                                    document.getElementById('batsSlide').style.display = 'flex';


                                    setTimeout(() => {
                                        navigate('/');
                                    }, 1500);
                                }}
                            >Compre já</button>
                            <button style={{ backgroundColor: '#000' }} id="button-carrinho" onClick={''}> Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>

                <div className="product-details">
                    <div className="linha">
                        <h1>Sobre</h1>
                    </div>
                    <p>Jogo castlevania</p>
                    {/* <p>Yam Yam é um jogo de tiro em 3D com elementos de RPG, onde um garoto-toupeira chamado Magu Magu e seu animal de estimação, Yam Yam, embarcam em uma aventura por 28 missões. Eles viajam entre vilas, enfrentando fases de tiro em 3D para derrotar monstros, ganhar pontos de experiência e coletar recompensas. O jogo apresenta elementos de RPG, como comprar equipamentos e completar tarefas nas vilas, mas reseta o progresso do personagem após cada missão, como se fosse um sonho.</p> */}
                </div>

                <div className="comments-area">
                    <h1>Avaliações</h1>

                    <div className="escrita">
                        <img src={Usuario} alt="" />
                        <input type="text" placeholder="Deixe um comentário" />
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



                    <div className="setas">

                        {
                            (setaRetornarComments == true)

                                ? <h2 id="seta" onClick={RetornarComments} style={{ fontSize: 70 }} > {'<'} </h2>
                                : <></>
                        }

                        {numPagComments.map(item =>

                            <p onClick={() => paginarComments(item)}>{item}</p>

                        )}

                        {
                            (setaAvancarComments == true)
                                ? <h2 id="seta" onClick={AvancarComments} style={{ fontSize: 70 }} > {'>'} </h2>
                                : <></>
                        }




                    </div>
                </div>



                <div className="other-products">
                    <div className="ot-tittle">
                        <h1>Outros Produtos</h1>
                    </div>


                    <div className="products">

                        <Produtos products={allProducts} />


                    </div>
                </div>
                <Rodape />
            </div>
        </>
    )
}