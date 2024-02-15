import { useState } from 'react';
import './style.scss'

const Report = (props) => {
    const [IsHidePopUp, setIsHidePopUp] = useState(props.isHide)

    return (
        <>
        <button onClick={() => setIsHidePopUp(true)}>aparecer</button>
            {IsHidePopUp &&
                <div className="Main_Report" >
                    <section className='PopUp' id='popUp' >
                        <header>
                            <span onClick={() => setIsHidePopUp(false)} style={{cursor: 'pointer'}} >X</span>
                            <h1>Reportar Usuario</h1>
                        </header>
                        <div className='Title'>
                            <h1>Qual o problema?</h1>
                        </div>
                        <section className='options'>
                            <div className='option' onClick={() => document.getElementById('odio').click()}>
                                <span style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h4>Discurso de ódio </h4>
                                    <a>
                                        Slurs, Estereótipos racistas ou sexistas, Desumanização, Incitação ao medo ou à discriminação, Referências odiosas, Símbolos e logotipos odiosos
                                    </a>
                                </span>
                                <input type='radio' id='odio' name='odio' value="odio" />
                            </div>
                            <div className='option' onClick={() => document.getElementById('violenta').click()}>
                                <span style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h4> Entidades violentas e odiosas </h4>
                                    <a>Extremismo violento e terrorismo, grupos e redes de ódio</a>
                                </span>
                                <input type='radio' id='violenta' name='violenta' value="violenta" />
                            </div>

                    <div className='option' onClick={() => document.getElementById('paia').click()}>
                        <span style={{ display: 'flex', flexDirection: 'column' }}>
                            <h4> Suicídio ou auto-mutilação </h4>
                            <a>Incentivar, promover, fornecer instruções ou compartilhar estratégias de auto-mutilação.</a>
                        </span>
                        <input type='radio' id='paia'/>
                    </div>

                            <div className='option' onClick={() => document.getElementById('dis_vio').click()}>
                                <span style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h4> Discurso Violento </h4>
                                    <a>Ameaças Violentas, Desejo de Dano, Glorificação da Violência, Incitação da Violência, Incitação Codificada da Violência</a>
                                </span>
                                <input type='radio' id='dis_vio' name='dis_vio' value="dis_vio" />
                            </div>

                            <div className='option' onClick={() => document.getElementById('ab').click()}>
                                <span style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h4> Abuso e Assédio </h4>
                                    <a>Insultos, Conteúdo Sexual Indesejado e Objetificação Gráfica, NSFW Indesejado e Conteúdo Gráfico, Negação de Evento Violento, Assédio Direcionado e Incitação ao Assédio</a>
                                </span>
                                <input type='radio' id='ab' name='ab' value="ab"/>
                            </div>
                        </section>
                        <section className='Btn'>
                            <button>Enviar</button>
                        </section>
                    </section>
                </div>
            }
        </>
    );
}


export default Report;