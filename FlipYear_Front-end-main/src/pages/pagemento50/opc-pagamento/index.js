export default function OpcPag(props) {

    console.log(props.item + 'oie');


    switch (props.item) {

        case 'Pix':
            return <div className='aprov_pix'>
                <h1>PIX</h1>
                <p>Com aprovação imediata que torna a expedição mais rápida do pedido.</p>
            </div>
        case 'Boleto':

            return <div className='aprov_boleto'>
                <h1 >Boleto Bancário</h1>
                <p>você podera visualizar ou imprimir o boleto após a finalização de pedido. Mas fique de olho! Passado  a data do vencimento seu pedido perderá automaticamente a validade. </p>

            </div>

        case 'Cartão': 
        return <div className='aprov_cartao'>
            <h1>Cartão de Crédito</h1>
            <div className='dados_cartao'>
                <div>
                    <p>Nome Completo</p>
                    <input type='text' />
                </div>
                <div>
                    <p>Número do Cartão</p>
                    <input type='number' />
                </div>
                <div className='vencimento_cartao'>
                    <div>
                        <p>Validade</p>
                        <input />
                    </div>
                    <div>
                        <p> CVV </p>
                        <input type='number' />
                    </div>
                    <div>
                        <p>Data de nascimento</p>
                        <input type='number' />
                    </div>
                </div>
                <div>
                    <p>CPF do Titular</p>
                    <input type='number' />
                </div>
                <div>
                    Parcelar Em -
                    <select>
                        <option> 0 </option>
                        <option> 0 - </option>
                        <option> 0 </option>
                        <option> 0 </option>
                        <option> 0 </option>
                        <option> 0 </option>

                    </select>
                </div>
            </div>
        </div>


    }





}