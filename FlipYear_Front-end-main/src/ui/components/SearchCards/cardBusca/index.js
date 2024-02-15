import './style.scss'
import console from '../../../assets/images/imageExamples/atari_console.png'
import { useNavigate } from 'react-router-dom'

const SearchCard = (props) => {
    const navigate = useNavigate('');
    function processoCompra() {
        console.log(props.i.ID_PRODUTO)
        navigate(`/produto/${props.i.ID_PRODUTO}`)
        window.location.reload();
        window.scrollTo(0, 0);
    }
    return(
        <div className="Main_SearchCard" onClick={() => {processoCompra(props.i.ID_PRODUTO)}}>
           <img src={console}/>

           <span className='Texts' style={{display: 'flex', flexDirection: 'column'}}>
            <b> {props.i.NM_PRODUTO} </b>
            <a style={{display: 'flex'}}> {props.i.TP_ESTADO} - {props.i.NM_FABRICANTE} </a>
           </span>

           <span className='Prices' style={{display: 'flex', flexDirection: 'column'}}>
            <b> {props.i.VL_PRECO} </b>
            <a style={{textDecoration: 'line-through'}}> {props.i.VL_PRECO_PROMOCIONAL} </a>
           </span>
    </div>
    );
}

export default SearchCard;      