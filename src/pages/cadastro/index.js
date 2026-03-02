import './style.scss';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import MarioGif from '../../ui/assets/images/imagesCadastro/mariokkart.gif';
import { EnviarDefaultImagem, EnviarImagem, InsertEnderecos, InsertUsuario } from '../../api/usuario';

const Cadastro = () => {
    const navigate = useNavigate('')

    const [Erro, setErro] = useState('');
    const [Nome, setNome] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [CPF, setCPF] = useState('');
    const [CEP, setCEP] = useState('');
    const [Cidade, setCidade] = useState('');
    const [Rua, setRua] = useState('');
    const [Complemento, setComplemento] = useState('');
    const [Numero, setNumero] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');

    const [UserDefaultFile, setUserDefaultFile] = useState(MarioGif);

    async function end() {
        const img = {img: "storage/images/profileImages/ef7cd7a13927904c12dfe940caf60f50"}
        const i = await EnviarDefaultImagem(img);
        return i.data.insertId
    }

    async function SetinfosEndereco() {
        let infosEndereco = {
            CEP: CEP,
            Cidade: Cidade,
            Rua: Rua,
            Complemento: Complemento,
            Numero: Numero
        }

        const i = await InsertEnderecos(infosEndereco);
         console.log(i.data[0].insertId)
        return i.data[0].insertId
    }



    const InsertUser = async () => {
        try {
            let Id_img = await end();
            let id_endereco = await SetinfosEndereco();

            let infosPessoa = {
                Id_endereco: id_endereco,
                Id_img: Id_img,
                Nome: Nome,
                Telefone: Telefone,
                CPF: CPF,
                Email: Email,
                Senha: Senha,
                Tier: "NORMAL_USER",
            }

            if (Senha !== confirmSenha)
                throw new Error('As senhas devem ser iguais!');
            

            await InsertUsuario(infosPessoa);

        } catch (err) {
            console.log(err.response ? err.response.data : err.message);
            setErro(err.response ? err.response.data : err.message);
        }
    }

    function voltar() {
        navigate('/')
    }

    // class Person{

    //     constructor(nome, oii) {
    //         this.nome = nome,
    //         this.oii = oii
    //     }
    // }


    return (
        <div className="mainCad">
            <div className='vol'>
                <a onClick={voltar}> {'<'} voltar </a>
            </div>

            <div className='Card'>
                <div className='Banner'>

                    <img src={MarioGif} />

                </div>

                <div className='CardCad'>
                    <span className='Title'>
                        <h1> Cadastro </h1>
                        <p> Informe os seus dados abaixo para criar sua conta </p>
                    </span>

                    <div className="inputs">
                        <div className='boxInput'>
                            <span style={{ width: 45 + '%' }}>
                                <a> Nome Completo* </a>

                                <input
                                    type='text'
                                    style={{ width: 100 + '%' }}
                                    value={Nome}
                                    onChange={e => setNome(e.target.value)} />
                            </span>

                            <span style={{ width: 75 + '%' }}>
                                <a > Telefone*</a>
                                <input
                                    type='text'
                                    value={Telefone}
                                    onChange={e => setTelefone(e.target.value)} />
                            </span>



                        </div>

                        <div className='boxInput'>
                            <span style={{ width: 75 + '%' }}>
                                <a> CPF* </a>
                                <input
                                    type='text'
                                    value={CPF}
                                    style={{ width: 100 + '%' }}
                                    onChange={e => setCPF(e.target.value)} />
                            </span>

                            <span style={{ width: 55 + '%' }}>
                                <a > CEP* </a>
                                <input
                                    type='text'
                                    value={CEP}
                                    onChange={e => setCEP(e.target.value)} />
                            </span>
                        </div>

                        <div className='boxInput'>
                            <span style={{ width: 50 + '%' }}>
                                <a> Cidade* </a>
                                <input
                                    type='text'
                                    value={Cidade}
                                    onChange={e => setCidade(e.target.value)} />
                            </span>

                            <span style={{ width: 50 + '%' }}>
                                <a> Rua* </a>
                                <input
                                    type='text'
                                    value={Rua}
                                    onChange={e => setRua(e.target.value)} />
                            </span>
                        </div>

                        <div className='boxInput'>
                            <span style={{ width: 90 + '%' }}>
                                <a> Complemento </a>
                                <input
                                    type='text'
                                    value={Complemento}
                                    onChange={e => setComplemento(e.target.value)} />
                            </span>

                            <span style={{ width: 15 + '%' }}>
                                <a> Numero* </a>
                                <input
                                    type='number'
                                    value={Numero}
                                    onChange={e => setNumero(e.target.value)} />
                            </span>
                        </div>

                        <div className='bottomInputs' style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>
                                <a> Email* </a>
                                <input
                                    type='text'
                                    style={{ width: 98.4 + "%" }}
                                    value={Email}
                                    onChange={e => setEmail(e.target.value)} />
                            </span>

                            <div style={{ display: "flex" }}>
                                <span>
                                    <a> Senha* </a>
                                    <input
                                        type='password'
                                        value={Senha}
                                        onChange={e => setSenha(e.target.value)} />
                                </span>

                                <span>
                                    <a style={{ width: '100%' }}> Digite a senha novamente* </a>
                                    <input
                                        type='password'
                                        value={confirmSenha}
                                        onChange={e => setConfirmSenha(e.target.value)} />
                                </span>

                            </div>
                        </div>
                        <a style={{ color: "red", display: "flex", marginTop: 20 }}> {Erro} </a>
                    </div>

                    <span style={{ color: "red", fontSize: 15 }}> <a>{Erro}</a> </span>


                    <div className='button' onClick={InsertUser}>
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

                    <span className='Entre'> <p>Já tem conta? <Link to='/login'> <b>Entre aqui </b> </Link> </p>  </span>

                </div>
            </div>
        </div>
    )
}

export default Cadastro