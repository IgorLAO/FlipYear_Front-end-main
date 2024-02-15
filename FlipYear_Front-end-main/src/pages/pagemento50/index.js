import './index.scss';

import Carrinho from '../../ui/assets/images/progress_pag_assets/carrinho_logo.png';
import Cartao from '../../ui/assets/images/progress_pag_assets/cartao_progresso_pagamento 1.png';
import Confirmacao from '../../ui/assets/images/progress_pag_assets/olho_progresso_pagamento 1.png';
import Concluir from '../../ui/assets/images/progress_pag_assets/confirm 1.png';
import Seta from '../../ui/assets/images/progress_pag_assets/setabaixa.png';
import Sonic from '../../ui/assets/images/progress_pag_assets/sonic-running.gif';
    import { useNavigate, useParams } from 'react-router-dom';
import CabecalhoVazio from '../../ui/components/cabecalhoSimples';
import Rodape from '../../ui/components/rodape';
import { useEffect, useState } from 'react';
import { ConsultarProdPorId } from '../../api/produtos';
import OpcPag from './opc-pagamento';

export default function Pagamento() {
    const [formaPag, setFormaPag] = useState('Pix')
    const [ list, setList] = useState([])
    const { idParam } = useParams();


    const navigate = useNavigate();

    useEffect(() => {
        Hide()
    }, [])

    const Hide = () => {
        const r = ConsultarProdPorId(idParam);
        setList(r);
        }
        
        function NavPag75(){
            navigate(`/pagamento75/${idParam}`);
        }
    return (
        <>

            <div className="container_pag50">
                <CabecalhoVazio />
                <div className='estado_pag'>
                    <div className='icons_pag'>
                        <div>
                            <img src={Carrinho} />
                            <p>Carrinho</p>
                        </div>
                        <div>
                            <img src={Cartao} />
                            <p>Pagamento</p>
                            <img src={Sonic} style={{ width: '55px' }} />
                        </div>
                        <div>
                            <img src={Confirmacao} />
                            <p>Confirmação</p>
                        </div>
                        <div>
                            <img src={Concluir} />
                            <p>Concluir</p>
                        </div>
                    </div>

                    <div className='pista'> </div>
                </div>

                <div className='pagamento_50'>
                    <img src={Cartao} />
                    <p>Pagamento</p>
                </div>

                <div className='ModosPag'>
                    <div className='opcoes_pag'>


                        <div onClick={()=>{setFormaPag('Pix')}}>
                            <p>Pix</p>
                        </div>

                        <div onClick={()=>{setFormaPag('Boleto')}}>
                            <p>Boleto Bancário</p>
                        </div>

                        <div onClick={()=>{setFormaPag('Cartão')}}>
                            <p>Cartão de Crédito</p>
                        </div>
                    </div>
                    <div className='contents'>

                
                            
                        <OpcPag item={formaPag}></OpcPag>


                        

         

                        <div className='VoltarConcluir'>
                            <button id='but_voltar'>Voltar</button>
                            <button id='but_concluir' onClick={NavPag75}>Selecionar</button>
                        </div>

                    </div>

                </div>





            </div>
            <Rodape />
        </>

    )
}