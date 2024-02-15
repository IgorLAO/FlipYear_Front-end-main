import './index.scss';
import logo from '../../../ui/assets/images/NavBar_assets/arcade_Logo 1.png';

export default function CabecalhoSimples(){
    return(
        <div className="cabecalho_vazio">
            <img src={logo}/>
            <div>
                <p>FLIP-YEAR</p>
                <h1>2000</h1>
            </div>
        </div>
    )
}