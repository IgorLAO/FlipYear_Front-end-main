import './index.scss';
import Rodape from '../../ui/components/rodape';
import CabecalhoSimples from '../../ui/components/cabecalhoSimples';
import Carrinho from '../../ui/assets/images/progress_pag_assets/carrinho_logo.png'
import Cartao from '../../ui/assets/images/progress_pag_assets/cartao_progresso_pagamento 1.png';
import Confirmacao from '../../ui/assets/images/progress_pag_assets/olho_progresso_pagamento 1.png'
import Concluir from '../../ui/assets/images/progress_pag_assets/confirm 1.png';
import Sonic from '../../ui/assets/images/progress_pag_assets/sonio.gif';
import CarrinhoBranco from '../../ui/assets/images/progress_pag_assets/carrinhoBranco.png';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { set } from 'local-storage';
import { useHref, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { ConsultarProdPorId } from '../../api/produtos';

export default function Pagamento25() {
    const [id, setId] = useState();
    const [list, setList] = useState([]);
    const [Discount, setDiscount] = useState('');
    const [frete, setFrete] = useState([]);
    const [cupom, setCupom] = useState([]);
    const [total, setTotal] = useState(0);
    const [quantidade, SetQuantidade] = useState(0);
    const [TotalCompra, setTotalCompra] = useState(0);
    const [cupomAplicado, setCupomAplicado] = useState(false);

    const { FreteSelecionado } = useParams();
    const { qtdProdutos } = useParams();
    const { idParam } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (parseInt(qtdProdutos) === 0) {
            SetQuantidade(1);
        } else {
            SetQuantidade(qtdProdutos);
        }
        ListProduct();
    }, [qtdProdutos]);

    async function ListProduct() {
        const resp = await ConsultarProdPorId(idParam);
        setList(resp);
    }

    function processPag50() {
        navigate(`/pagamento50/${idParam}`);
    }

    function PrecoCompra() {

        const valorProduto = list.VL_PRECO * qtdProdutos;
        const r = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorProduto);
        const valorFrete = Number(FreteSelecionado.replace(/[^0-9,-]+/g, ""));

        const resultado = valorFrete + valorProduto;

        const totalCompraFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resultado);

        setTotal(r);
        setTotalCompra(totalCompraFormatado);
        setFrete(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorFrete));
    }

    function CupomDesconto() {

        if (!cupomAplicado) {
            const valorNumerico = parseFloat(TotalCompra.replace(/[^0-9,-]+/g, '').replace(',', '.'));

            if (Discount === "flipyear") {
                const desconto = (valorNumerico * 10) / 100;
                const totalComDesconto = valorNumerico - desconto;

                setTotalCompra(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalComDesconto));

                setCupomAplicado(true);
            } else {

                setTotalCompra(TotalCompra);
            }
        }
    }
    
    useEffect(() => {
        PrecoCompra();
    }, [list])

    return (
        <>
            <CabecalhoSimples />
            <div className="container_pag25">
                <div className='estado_pag'>
                    <div className='icons_pag'>
                        <div>
                            <img src={Carrinho} />
                            <p>Carrinho</p>
                            <img src={Sonic}/>

                        </div>
                        <div>
                            <img src={Cartao} />
                            <p>Pagamento</p>
                        </div>
                        <div>
                            <img src={Confirmacao} />
                            <p>Confirmação</p>
                        </div>
                        <div>
                            <img src={Concluir} />
                            <p>Concluído</p>
                        </div>
                    </div>
                    <div className='pista'></div>
                </div>

                <div className='titulo_carrinho'>
                    <div>
                        <img src={Carrinho} />
                        <p>Meu Carrinho</p>
                    </div>
                </div>

                <div className='finalizar-produtos'>
                    <div className='inform_prod'>
                        <div className='container_lista'>
                            <div className='lista_produtos'>
                                <div className='cabecalho_prod'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Poduto</th>
                                                <div>
                                                    <th>Qtd</th>
                                                    <th>Preço</th>
                                                </div>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td>{list.NM_PRODUTO}</td>
                                                <div style={{ display: "flex", justifyContent: "space-between", width: "25%" }}>
                                                    <td>{quantidade}</td>
                                                    <td style={{ padding: "0px" }}>{list.VL_PRECO}</td>
                                                </div>

                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className='resumo_pedido'>

                            </div>
                        </div>
                    </div>

                    <div className='resumo_pedido'>
                        <div className='valores_pedido'>
                            <div className='titulo_resumo'>
                                <p>Resumo</p>
                                <div></div>
                            </div>
                            <div className='dados_pedido'>
                                <div>
                                    <p>SUBTOTAL</p>
                                    <p>{total}</p>
                                </div>
                                <div>
                                    <p>FRETE</p>
                                    <p>{frete} </p>
                                </div>
                            </div>
                            <div className='total_pedido'>
                                <p>TOTAL</p>
                                <p>{TotalCompra}</p>
                            </div>
                            <div value={Discount}
                                onChange={(e) => setDiscount(e.target.value)}

                                className='cupom_desconto'>
                                <input type="text" placeholder='Cupom de desconto' />
                                <a style={{cursor: 'pointer'}} 
                                onClick={CupomDesconto}>Aplicar</a>
                            </div>
                        </div>
                        <div onClick={processPag50} className='finalizar'>
                            <img src={CarrinhoBranco} />
                            <p>Avançar</p>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </>

    )
}