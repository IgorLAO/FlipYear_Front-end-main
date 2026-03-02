import { PutPedidos } from '../../../../api/pedidos';
import './style.scss';

import react, { useEffect, useState } from 'react'

export default function StatusDisplay(props) {
    const [PorcentProgess, setPorcentProgess] = useState(0);

    const [Situacao, SetSituacao] = useState('');

    async function HandleSituacao() {
        let id = Number(props.id)
        const data = await PutPedidos(id, Situacao);
        console.log(Situacao)
    }

    async function HandleSituacaoAguarda() {
        SetSituacao('Aguardando Pagamento')
        const data = await PutPedidos(props.id, {Situacao: "Aguardando Pagamento"});
    }
    async function HandleSituacaoConcluído() {
        SetSituacao('Concluído')
        const data = await PutPedidos(props.id, {Situacao: "Concluido"});
    }
    async function HandleSituacaoEmTran() {
        SetSituacao('Em transito')
        const data = await PutPedidos(props.id, {Situacao: 'Em transito'});
    }

    async function HandleSituacaoProcess() {
        SetSituacao('processando')
        const data = await PutPedidos(props.id, {Situacao: "processando"});
    }

    async function HandleSituacaoEntregue() {
        SetSituacao('Entregue')
        const data = await PutPedidos(props.id, {Situacao: "Entregue"});
    }

    
    useEffect(() => {
        console.log(Situacao); 
    }, [Situacao]);

    return (
        <main className='Main_StatusDisplay'>
            <div className='contentDisplay'>
                <header style={{ display: 'flex' }}>
                    <span>X</span>

                    <h4 style={{ display: 'flex', justifyContent: 'center' }}>
                        Selecionar Status do Produto
                    </h4>
                </header>
                <div className='carProgress' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <a className='destino'>
                        <h5 style={{ marginBottom: '5px' }}>Destino</h5>
                        <span>
                            Rua da silva medeiro campos, n23
                        </span>
                    </a>
                    <div style={{
                        display: 'flex',
                        padding: '0px',
                        width: '50%',
                        backgroundColor: '#F5F5F5'
                    }}>

                        <span style={{
                            backgroundColor: '#20cc59',
                            padding: '5px',
                            width: `${PorcentProgess}%`
                        }}>

                        </span>
                    </div>
                </div>

                <div className='btns'>

                    <div className='button' onClick={HandleSituacaoAguarda}>
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
                        <a  >
                            Aguardando Pagamento
                        </a>
                    </div>

                    <div className='button' onClick={HandleSituacaoProcess}>
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
                            Processando
                        </a>
                    </div>

                    <div className='button' onClick={HandleSituacaoEmTran}>
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
                            Em Trânsito
                        </a>
                    </div>

                    <div className='button' onClick={HandleSituacaoEntregue}>
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
                            </svg>
                        </span>
                        <a>
                            Entregue
                        </a>
                    </div>

                    <div className='button' onClick={HandleSituacaoConcluído}>
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
                            Concluído
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}