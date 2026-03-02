import { useState, useEffect } from 'react';
import './ListagemCarrinho.scss'
import axios from 'axios';
import localStorage from 'local-storage';
import {  useNavigate } from 'react-router-dom';
 
export default function ListagemCarrinho(props) {
  const estoragemLocal = localStorage('ADM_Logado')

  const [border, setBorder] = useState('none');
  const [idProduto, setIdProduto] = useState(props.idProduto);
  const [qtdProdutos, SetQtdProdutos] = useState(props.QTD_PRODUTO_CARRINHO);
  const [idUser, setIdUser] = useState(1);

  const [apagar, setApagar] = useState('');

  const Navigate = useNavigate();

  const Hover = () => {
    setBorder('1px solid black');
    setApagar('X');
  };

  const Unset = () => {
    setBorder('none');
    setApagar('');
  };

  const ExcluirProduto = async () => {
    try {
      const r = await axios.delete(`http://129.148.42.252:5010/carrinho/produto/` + `${idUser}` + '/' + `${idProduto}`)
        } catch (err) {
      throw new Error('Erro ao excluir produto:', err);
    }
  };

  function PagProduto(){
      Navigate(`/produto/${idProduto}`)
  }
    return (<div className='lista-carrinho'>
              
              <div className='linha-produtos'
              onMouseEnter={Hover}
              onMouseLeave={Unset} 
              style={{border: `${border}`}}>
              <p>{props.qtd}</p>
              <p onClick={PagProduto} id='nomeProduto'>{props.nome}</p>
            
              {
                (props.promocao == true)
                ?<p>${props.precoPromocional}</p>

                :<p>${props.precoOriginal}</p>
              }

              { 

              (apagar == 'X')

              ?<p className='apagar' onClick={ExcluirProduto}>{apagar}</p>


              :<></>



              }

              
              </div>

          </div>);
  }