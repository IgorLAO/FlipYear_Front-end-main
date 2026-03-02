import './style.scss';

import localStorage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import Corvo from '../../../../ui/assets/images/perfil-publico_assets/download 2.png'
import cam from '../../../../ui/assets/images/edit_profi/cam.png'

import { useEffect, useState } from 'react';
import { EnviarImagem, GetProfileImage, GetUserById } from '../../../../api/usuario';


export default function EditarPerfil(props) {
    const navigate = useNavigate();
    const [IsHide, setIsHide] = useState(true);

    const [NewProfilePic, setNewProfilePicShow] = useState();

    const [SendNewProfilePic, setSendNewProfilePic] = useState();
    const [CurrentProfilePic, setCurrentProfilePic] = useState('');
    const [BannerColor, setBannerColor] = useState('');


    // esse envia imagem
    // essa função vai dar erro provavelmente. Vou dar uma encurtada dps
    async function Save() {
        try {
            const infos = localStorage("NORMAL_USER_Logado");
            
            console.log(SendNewProfilePic);
            
            if (SendNewProfilePic) 
                EnviarImagem(infos.data.Id, SendNewProfilePic);
            

            setIsHide(false);
        } catch (err) {
            console.log({ Erro: err.message })
        }
    }

    async function GETImages() {
        let infos = localStorage('NORMAL_USER_Logado');

        let id = infos.data.Id;

        let das = await GetUserById(id);

        let profile = GetProfileImage(das.data[0].ImageProfile);
        console.log(das.data[0].ImageProfile);

        setCurrentProfilePic(profile);

        return { profile }
    }

    function GetNewImage() {

    }

    async function TESTES() {

    }

    const HideDisplay = () => {
        document.getElementById('editP').style.display = `${props.DisplayHide}`

    }

    // ---------****--------------****---------------****--------
    if (IsHide) {
        document.body.style.overflow = 'hidden';

    } else {
        document.body.style.overflow = 'auto';
    }

    useEffect(() => {
        GETImages();

        props.SendProfileToD(CurrentProfilePic);
        props.SendColorToD(BannerColor);

        console.log(props.DisplayHide)
    }, [props, CurrentProfilePic, BannerColor, IsHide])

    return (
        <>
            {IsHide &&
                <div className='MainPerfil-edit' style={{ display: props.DisplayHide }} id='editP' >
                    <div className='EditFrame'>
                        <header>
                            <span>
                                <a style={{ fontSize: '15px' }} onClick={() => { setIsHide(false); window.location.reload() }}>X</a>
                                <h5 style={{ color: "black" }} >Edit Profile</h5>
                            </span>
                            <a className='SaveBtn' onClick={Save}>SAVE</a>
                        </header>

                        <section id='edit'>
                            <div className='ProfilePic' >
                                <div className='banner'
                                    style={{ backgroundColor: localStorage('color') }}
                                    onClick={() => document.getElementById('color').click()}>

                                    <input type='color'
                                        id='color'
                                        value={BannerColor}
                                        onChange={e => {
                                            setBannerColor(e.target.value);
                                            localStorage('color', e.target.value)
                                        }} />

                                </div>

                                <span className='perfil'  onClick={() => document.getElementById('fileProfile').click()}
                                >
                                    {!NewProfilePic ?
                                        (<img className='foto' src={CurrentProfilePic} alt='imagem antiga'
                                         />)
                                        :
                                        (<img className='foto' src={NewProfilePic} alt='nova imagem de perfil' />)}

                                    <span className='blockCam' id='cam'>
                                        <img src={cam} alt='CameraIcon' />

                                        <input type='file' id='fileProfile' onChange={e => setSendNewProfilePic(e.target.files[0])} />
                                    </span>
                                </span>
                            </div>

                            <div className='advancedOP' onClick={() => (document.getElementById('av').style.display = 'flex', document.getElementById('edit').style.display = 'none')}>
                                <span>
                                    <a>Opções avançadas</a>  <a>{'>'}</a>
                                </span>
                                <p> Informações da sua conta, como endereços, email e alterar senha </p>
                            </div>
                            </section>

                            <div className='Av' id='av' style={{display: 'none'}}>
                                <span>
                                    <h2>Configuraçoes avancadas</h2>
                                    <hr />
                                </span>
                                <div className='inputs2' >
                                    <span>
                                        <a>Alterar Nome</a>
                                        <input type='text' />
                                    </span>

                                    <span>
                                        <a>Alterar Email</a>
                                        <input type='text' />
                                    </span>
                                    <div>
                                        <span>
                                            <a>endereços</a>
                                            <input type='text' onBlur={() => document.getElementById('ed').style.display = 'flex'} />
                                        </span>

                                        <span id='ed' style={{ display: 'none' }}>
                                            <span>
                                                <a>Cep</a>
                                                <input type='text' />
                                            </span>
                                            <span>
                                                <a>Numero</a>
                                                <input type='text' />
                                            </span>

                                            <span>
                                                <a>Cidade</a>
                                                <input type='text' />
                                            </span>
                                        </span>
                                    </div>
                                    <div className='altSenha' style={{ display: 'flex' }}>
                                        ALterar senha
                                        <span>
                                            <a>Nova Senha</a>
                                            <input type='text' />
                                        </span>

                                        <span>
                                            <a>Senha Antiga</a>
                                            <input type='text' />
                                        </span>
                                    </div>
                                </div>
                            </div>
               
                    </div>
                </div>
            }
        </>
    )


}

