import './login.scss';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import localStorage from 'local-storage';
import { RecupararSenha } from '../../ui/components/recuperarSenhaComponets/recuperar_senha';

import googleLogo from '../../ui/assets/images/imagesLogin/google 1.png';
import FacebookeLogo from '../../ui/assets/images/imagesLogin/face 1.png';
import { Login2 } from '../../api/usuario';


function Login(props2) {
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const [reveal, setReveal] = useState(false);
  const [Erro, setErro] = useState('');

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const hideReveal = () => {
    setHide(false)
    setReveal(true)
  }

  const hideReveal2 = () => {
    setHide(true)
    setReveal(false)
  }



  const logar = async (e) => {
    try {
      let r = await Login2(email, senha);

      if (r.data.Tier === "ADM") {
        localStorage('ADM_Logado', r)
        navigate('/ADM');

      } else if (r.data.Tier === "NORMAL_USER") {
        localStorage('NORMAL_USER_Logado', r);
        navigate('/perfil-pessoal');

      }

    } catch (err) {
      setErro(err.response);
    }
  }

  const logarEnter = async (e) => {
    if (e.key === 'Enter') {
      try {
        let res = await Login2(email, senha);

        if (res.data.Tier == "ADM") {
          localStorage('ADM_Logado', res);
          navigate('/ADM');

        } else if (res.data.Tier === "NORMAL_USER") {
          localStorage('NORMAL_USER_Logado', res)
          navigate('/perfil-pessoal');
        }

      } catch (err) {
        console.log(err.response, 'aaa');
        // setErro(err.response.data.erro);

      }
    }
    else {
      console.log('uii')
    }
  }

  const verify = () => {
    if (localStorage('ADM_Logado'))
      navigate('/ADM');

    if (localStorage('NORMAL_USER_Logado'))
      navigate('/perfil-pessoal');

    if (localStorage('ADM_Logado'))
      navigate('/ADM')

    if (localStorage('NORMAL_USER_Logado'))
      navigate('/perfil-pessoal')


  }

  function voltar() {
    navigate('/')
  }

  useEffect(() => {
    verify();
  }, []);

  return (
    <>
      <div className='main'>
        <div className='vol'>
          <a onClick={voltar}> {'<'} voltar </a>
        </div>
        <div className='Frame'>

          <div className='DetailsInside'>
            {hide && (
              <>
                <h2>Ola! seja bem-vindo </h2>

                <form action="">
                  <label for='email'>
                    Email
                    <input type="text" id='email' value={email} onChange={e => setEmail(e.target.value)} />
                  </label>
                  <label for='senha'>
                    Senha
                    <input type="password" id='senha' value={senha} onChange={e => setSenha(e.target.value)} onKeyDown={logarEnter} />
                  </label>
                  <h6 onClick={hideReveal}>Esqueceu a senha</h6>

                </form>
                <a
                  onClick={logar}
                  className='entrarButton' style={{ cursor: 'pointer' }}> APERTE PARA ENTRAR </a>

                <span className='linha'></span>

                <div className='entrarCom'>

                  <h6>Ainda não tem uma conta? <Link to='/cadastro'> <a >Cadastre-se</a></Link> </h6>
                  <a style={{ color: "red", display: "flex", marginTop: 20 }}> {Erro} </a>
                </div>
              </>
            )}
          </div>

          {reveal && (
            <RecupararSenha hideReveal2={hideReveal2} />
          )}
        </div>

      </div>

    </>
  )
}

export default Login
