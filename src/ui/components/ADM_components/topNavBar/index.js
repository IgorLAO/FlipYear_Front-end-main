import './style.scss'
import { useEffect, useState } from 'react';

import LogoArcade from "../../../assets/images/NavBar_assets/arcade_Logo 1.png";
import bellADM from "../../../assets/images/adm_assets/sino_adm.png";
import perfil from "../../../assets/images/adm_assets/marg.jpg";

import localStorage from 'local-storage';
import { useNavigate } from 'react-router-dom';

export default function AdmTopNavBar() {
    const [NomeUser, setNomeUser] = useState('');
    const [Tier, setTier] = useState('');

    const [isHideOptions, setIsHideOptions] = useState(false)
    const [Ang, setAng] = useState('0')
    const navigate = useNavigate();

    function hideValid() {
        setIsHideOptions(true)
        setAng('90')

        if (isHideOptions) {
            setIsHideOptions(false);
            setAng('0')
        }
    }

    useEffect(() => {
        if (!localStorage("ADM_Logado")) {
            navigate('/login')
        } else {
            const infos = localStorage("ADM_Logado");
            setNomeUser(infos.data.Nome);
            setTier(infos.Tier)
        }
        

    }, [])

    return (
        <div className="MainTopNavBar">
            <div className="Logo">
                <img src={LogoArcade} />
                <h3> Flip-Year
                    <h1>2000</h1>
                </h3>
            </div>

            <div className='Perfil'>
                <img src={perfil} />
                <span className='Name_ArrowMenu' style={{ cursor: "pointer" }}>
                    <span onClick={hideValid} style={{display: "flex", alignItems: "center"}}>
                        <h4> {NomeUser} </h4>
                        <a style={{ transform: `rotate(${Ang}deg)`, marginLeft: 7 }}> {'>'}  </a>
                    </span>
                    {isHideOptions &&(
                         <div className='ArrowOption'>
                         <p> configuracao </p>
                         <hr/>
                         <p> configuracao </p>
                         <hr/>
                         <p> configuracao </p>
                         <hr/>
                         <p> configuracao </p>
                         <hr/>
                         <p> configuracao </p>
                     </div>
                     )}
                </span>
                <img src={bellADM} id='bell' />
            </div>
        </div>
    );
}