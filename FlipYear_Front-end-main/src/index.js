
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from './pages/loginPage/login';
import App from './pages/home/App';
import Cadastro from './pages/cadastro/index';
import InfProduto from './pages/InfProduto';
import Catalogo from './pages/catalogo';
import Pagamento50 from './pages/pagemento50';
import PerfilPublico from './pages/perfil/perfil-publico'
import Pagamento75 from './pages/pagamento75';
import AdmHome from './pages/ADM_pages/home';
import ADM_pedidos from './pages/ADM_pages/pedidos_concluidos';
import Users_Consulta from './pages/ADM_pages/consulta_usuarios';
import Produtos_ConsultaADM from './pages/ADM_pages/consulta_produto';
import PerfilPessoal from './pages/perfil/perfil-pessoal';
import StatusPedido from './pages/perfil/status-pedido'
import Estatisticas from './pages/ADM_pages/estatisticas';
import RegistroProdutos from './pages/ADM_pages/registro_produto';
import Pagamento100 from './pages/pagamento100';
import Pagamento25 from './pages/pagamento25';
import Carrinho from './pages/carrinho';
import SearchResults from './pages/SearchResultsPage';
import Suporte from './pages/suporte';
import SobreNos from './pages/sobre_nos';
import MeusPedidos from './pages/pedidos';
import Castlevania from './pages/Castlevania';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/catalogo' element={<Catalogo />} />

        <Route path='/produto' element={<InfProduto />} />
        <Route path='/produto/:idParam' element={<InfProduto />} />

        <Route path='/pagamento25' element={<Pagamento25 />} />
        <Route path='/pagamento25/:idParam/:qtdProdutos/:FreteSelecionado' element={<Pagamento25 />} />

        <Route path='/pagamento50' element={<Pagamento50 />} />
        <Route path='/pagamento50/:idParam' element={<Pagamento50 />} />

        <Route path='/pagamento75' element={<Pagamento75 />} />
        <Route path='/pagamento75/:idParam' element={<Pagamento75 />} />

        <Route path='/pagamento100' element={<Pagamento100 />} />
        <Route path='/perfil-publico' element={<PerfilPublico />} />
        <Route path='/status-pedido' element={<StatusPedido />} />
        <Route path='/perfil-pessoal' element={<PerfilPessoal />} />
        <Route path='/ADM' element={<AdmHome />} />
        <Route path='/ADM_Users' element={<Users_Consulta />} />
        <Route path='/ADM_Pedidos' element={<ADM_pedidos />} />
        <Route path='/ADM_Produtos' element={<Produtos_ConsultaADM />} />
        <Route path='/ADM_Estatisticas' element={<Estatisticas />} />
        <Route path='/ADM_RegistroProd' element={<RegistroProdutos />} />

        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/carrinho/:idParam' element={<Carrinho />} />

        <Route path='/pedidos' element={<MeusPedidos />} />

        <Route path='/search' element={<SearchResults />} />
        <Route path='/Suporte' element={<Suporte />} />
        <Route path='/sobrenos' element={<SobreNos />} />

        <Route path='/castlevania' element={<Castlevania />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

