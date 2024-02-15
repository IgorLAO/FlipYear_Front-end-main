import './index.scss';
import moment from 'moment';

import Usuario from "../../../ui/assets/images/NavBar_assets/usuario_logo.png";
import flag from '../../../ui/assets/images/compraPage_assets/red_flag.png'
import estrela from '../../../ui/assets/images/imagesCardProduto/estrela_cheia-avaliacao 11.png'
import PopUpPerfil from '../perfil/pop-up-perfil';

import { useEffect, useState } from 'react';
import Report from '../report';


export default function Comments(props) {
    const [popUpPefil, setPopUpPerfil] = useState('');
    const [IsHideReportPopUp, setIsHideReportPopUp] = useState(true);
    const [dataPublicacao, setDataPublicacao] = useState('')

    function mostrarPopUpPerfil() {

        setPopUpPerfil(true);

        if (popUpPefil == true) {

            setPopUpPerfil(false);

        }

    }

    function Publicacao() {
        const publicacao = new Date(props.Data)
        const FixedData = moment(publicacao).format('DD/MM/YYYY');
        setDataPublicacao(FixedData)
    }

    useEffect(() => {
        Publicacao()
    }, [dataPublicacao])

    return (
        <div className='Comment'>

            {(popUpPefil)
                ? <PopUpPerfil />
                : <></>}

            
            <div>
                {props.Produto == props.idParam

                    ? <div className="comment-block">

                        <div className="comments">
                            <div className="comment-box">
                                <div className="content">
                                    <div className="img-perfil">
                                        <img onClick={mostrarPopUpPerfil} src={Usuario} alt="" />
                                    </div>

                                    <div className="txt-comment">
                                        <div className="username">
                                            <h2>{props.Nome}</h2>
                                            <span>{dataPublicacao}</span>
                                        </div>

                                        <div className="comment">
                                            <p>{props.Conteudo}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="resposta-area">

                                </div>
                            </div>
                        </div>
                        <img id="red-flag" src={flag} alt="" onClick={() => setIsHideReportPopUp(true)} />
                    </div>

                    : <></>
                }
            </div>
        </div>
    )
}