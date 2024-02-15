import './index.scss';

import localStorage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import filter from '../../../ui/assets/images/adm_assets/filter_icon 1.svg';

import SideBarUsers from '../../../ui/components/perfil/lateral_menu_Perfil';
import CardPedido2 from '../../../ui/components/perfil/card-pedido2';
import EditarPerfil from '../../../ui/components/perfil/editar-perfil';
import Produtos from '../../../ui/components/produtos';
import { GetProfileImage, GetUserById } from '../../../api/usuario';

export default function PerfilPessoal() {
    const navigate = useNavigate();
    const [NomeUser, setNomeUser] = useState('default');
    const [Infos, setInfos] = useState();

    const [ReceivedBanner, setReceivedBanner] = useState('');
    const [ReceivedBannerColor, setReceivedBannerColor] = useState('');
    const [ReceivedProfile, setReceivedProfile] = useState('');
    const [DisplayHide, setDisplayHide] = useState(false);

    useEffect(() => {
        if (!localStorage("NORMAL_USER_Logado")) {
            navigate('/login');
        } else {
            const infos = localStorage("NORMAL_USER_Logado");
            navigate('/perfil-pessoal');
            setNomeUser(infos.data.Nome);
            setInfos(infos);
        }
        

    }, []);


    async function GETuserImage() {
        let infos = localStorage('NORMAL_USER_Logado');
        let id = infos.data.Id;
        let das = await GetUserById(id);

        console.log(das);
       
    }

    const sendProfileToS = (dados) => {
        setReceivedProfile(dados);
    };

    const sendColorToS = (dados) => {
        setReceivedBannerColor(dados);
    };

    const HideDisplay = (dados) => {
        setDisplayHide(dados);
    }

    function Hide() {
        document.getElementById('edit').style.display = 'flex';
        setDisplayHide('flex')
    }

    useEffect(() => {
        sendProfileToS();
        sendColorToS();
        HideDisplay();
    }, []);

    

    document.body.style.overflow = 'auto';
    return (
        <>
            <div className='MainPerfil-P' id='Main-P'>
                {DisplayHide &&
                    <EditarPerfil
                        SendProfileToD={sendProfileToS}
                        SendColorToD={sendColorToS}
                        DisplayHide={DisplayHide}
                    />}

                <span style={{ display: 'none' }}>
                    <EditarPerfil
                        SendProfileToD={sendProfileToS}
                        SendColorToD={sendColorToS}
                    />
                </span>
             
                <div className='perfil-pag'>
                    <div src={ReceivedBanner} style={{
                        width: '100%',
                        objectFit: 'cover',
                        height: '400px',
                        backgroundColor: localStorage('color')
                    }} ></div>

                    <span style={{ display: 'flex' }}>
                        <SideBarUsers />
                        <section className='PerfilDetails'>
                            <div className='Perfil'>
                                <span className='InfoP'  style={{
                                        height: '150px',
                                        width: '100%',
                                        maxWidth: '150px',
                                    }}>
                                    <img src={ReceivedProfile} style={{
                                        height: '150px',
                                        width: '100%',
                                        maxWidth: '150px',
                                        maxHeight: '150px',
                                        objectFit: 'cover'
                                    }} />
                                    <a> {NomeUser} </a>

                                </span>
                                <span>
                                    <a className='EditBtn' style={{ cursor: 'pointer' }} onClick={() => setDisplayHide(true)}>
                                        Editar Perfil
                                    </a>

                                </span>
                            </div>

                            <div className='Pedidos'>
                                <span className='title'>
                                    <span>
                                        <h1> Meus Pedidos </h1>
                                    </span>
                                    <img src={filter} />
                                </span>
                                <div className='Items'>
                                    {/* <Produtos
                                         /> */}
                                </div>
                            </div>
                        </section>
                    </span>
                </div>
            </div>
        </>
    )
}