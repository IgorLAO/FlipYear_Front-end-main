import './index.scss';
import Sonic from '../../../assets/images/perfil-publico_assets/sonic-removebg-preview 54.png'

export default function CardPedido2(){


    return(
        <div className='comp-card-pedido'>

            
            <div className='card-pedido'>
                <div className='jogo'>
                <img src={Sonic}></img>

                <p>Sonic The Hedgehog 2</p>

                </div>

            <div className='texto'>



                <p>qtd 
                    <br></br>
                    1
                </p>

                <p>Preço Total 
                    <br></br>
                    R$ 666,60
                </p>

                <p>Status 
                    <br></br>
                    Pendente
                </p>
            </div>
        </div>

        <div className='bolinha'>
         <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" viewBox="0 0 38 32" fill="none">
            <path d="M36 16C36 23.4237 28.7247 30 19 30C9.27531 30 2 23.4237 2 16C2 8.5763 9.27531 2 19 2C28.7247 2 36 8.5763 36 16Z" stroke="#E0F8CF" stroke-width="4"/>
        </svg>

        <p>i</p>

        </div>
            </div>




    )
}
