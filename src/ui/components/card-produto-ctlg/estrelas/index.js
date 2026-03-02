import './index.scss'
import { useState } from 'react'

import EstrelaVaziaEsquerda from '../../../assets/images/imagesCardProduto/estrelavazia esquerda.png'
import EstrelaVaziaDireita from '../../../assets/images/imagesCardProduto/estrelavaziadireita.png'
import EstrelaCheiaEsquerda from '../../../assets/images/imagesCardProduto/estrelacheiaesquerda.png'
import EstrelaCheiaDireita from '../../../assets/images/imagesCardProduto/estrelacheiadireita.png'

export default function EstrelasAvaliacao() {

    const [estrelaCheiaEsq1, setEstrelaCheiaEsq1] = useState(false);
    const [estrelaCheiaDir1, setEstrelaCheiaDir1] = useState(false);

    const [estrelaCheiaEsq2, setEstrelaCheiaEsq2] = useState(false);
    const [estrelaCheiaDir2, setEstrelaCheiaDir2] = useState(false);

    const [estrelaCheiaEsq3, setEstrelaCheiaEsq3] = useState(false);
    const [estrelaCheiaDir3, setEstrelaCheiaDir3] = useState(false);

    const [estrelaCheiaEsq4, setEstrelaCheiaEsq4] = useState(false);
    const [estrelaCheiaDir4, setEstrelaCheiaDir4] = useState(false);

    const [estrelaCheiaEsq5, setEstrelaCheiaEsq5] = useState(false);
    const [estrelaCheiaDir5, setEstrelaCheiaDir5] = useState(false);


    const [nCliques, setNCliques] = useState(0);
    const [clicado, setClicado] = useState(false);

    //Selects da esquerda

    function selectEstrelaEsq() {

        if (clicado == false) {
            setEstrelaCheiaEsq1(true);

        }

    }

    function selectEstEsq2() {

        if (clicado == false) {
            setEstrelaCheiaEsq2(true);
            setEstrelaCheiaDir1(true);
            setEstrelaCheiaEsq1(true);


        }




    }

    function selectEstEsq3() {

        if (clicado == false) {

            setEstrelaCheiaEsq3(true);
            selectEstEsq2();
            selectEstDir2();

        }



    }

    function selectEstEsq4() {

        if (clicado == false) {

            setEstrelaCheiaEsq4(true);
            selectEstEsq3();
            selectEstDir3();


        }



    }

    function selectEstEsq5() {

        if (clicado == false) {

            setEstrelaCheiaEsq5(true);
            selectEstEsq4();
            selectEstDir4();

        }




    }

    //Selects da direita

    function selectEstrelaDir() {

        if (clicado == false) {

            setEstrelaCheiaDir1(true);

        }



    }


    function selectEstDir2() {

        if (clicado == false) {

            selectEstEsq2();
            setEstrelaCheiaDir2(true);


        }




    }

    function selectEstDir3() {

        if (clicado == false) {

            setEstrelaCheiaDir3(true);
            selectEstEsq3();


        }




    }

    function selectEstDir4() {

        if (clicado == false) {

            setEstrelaCheiaDir4(true);
            selectEstEsq4();

        }



    }

    function selectEstDir5() {

        if (clicado == false) {

            setEstrelaCheiaDir5(true);
            selectEstEsq5();

        }



    }


    //Unselect da Esquerda

    function unselectEstrelaEsq() {

        if (clicado == false) {

            setEstrelaCheiaEsq1(false)

        }

    }

    function unselectEstEsq2() {

        if (clicado == false) {

            setEstrelaCheiaEsq2(false);
            unselectEstrelaDir();
            unselectEstrelaEsq();

        }


    }

    function unselectEstEsq3() {


        if (clicado == false) {

            setEstrelaCheiaEsq3(false);
            unselectEstDir2();
            unselectEstEsq2();


        }



    }

    function unselectEstEsq4() {


        if (clicado == false) {

            setEstrelaCheiaEsq4(false);
            unselectEstDir3();
            unselectEstEsq3();
        }
    }
    function unselectEstEsq5() {
        if (clicado == false) {
            setEstrelaCheiaEsq5(false);
            unselectEstDir4();
            unselectEstEsq4();

        }

    }

    //Unselect da Direita
    function unselectEstrelaDir() {
        if (clicado == false) {
            setEstrelaCheiaDir1(false);
        }

    }

    function unselectEstDir2() {
        if (clicado == false) {
            setEstrelaCheiaDir2(false)
            unselectEstEsq2();
        }
    }

    function unselectEstDir3() {
        if (clicado == false) {
            setEstrelaCheiaDir3(false);
            unselectEstEsq3();
        }
    }

    function unselectEstDir4() {
        if (clicado == false) {
            setEstrelaCheiaDir4(false);
            unselectEstEsq4();
        }
    }

    function unselectEstDir5() {
        if (clicado == false) {
            setEstrelaCheiaDir5(false);
            unselectEstEsq5();
        }
    }

    function Clicks(id) {
        setClicado(true);

        if (clicado == true) {
            //cheio

            if (id == 'cd5') {
                let num = nCliques + 1
                setNCliques(num);

                if (nCliques == 0) {
                    setClicado(false);
                    setNCliques(0);
                    unselectEstDir5()
                }
            }

            if (id == 'ce5') {
                setEstrelaCheiaDir5(false);
                let num = nCliques + 1
                setNCliques(num);

                if (nCliques == 0) {
                    setClicado(false);
                    setNCliques(0);

                    unselectEstDir5()
                }
            }

            if (id == 'cd4') {
                setEstrelaCheiaEsq5(false);
                setEstrelaCheiaDir5(false);

                let num = nCliques + 1
                setNCliques(num);

                if (nCliques == 0) {
                    setClicado(false);
                    setNCliques(0);
                }
            }

            if (id == 'ce4') {
                setEstrelaCheiaEsq5(false);
                setEstrelaCheiaDir5(false);
                setEstrelaCheiaDir4(false);

                let num = nCliques + 1
                setNCliques(num);

                if (nCliques == 0) {
                    setClicado(false);
                    setNCliques(0);
                }
            }

            if (id == 'cd3') {
                setEstrelaCheiaEsq5(false);
                setEstrelaCheiaEsq4(false);
                setEstrelaCheiaDir5(false);
                setEstrelaCheiaDir4(false);

                let num = nCliques + 1
                setNCliques(num);

                if (nCliques == 0) {
                    setClicado(false);
                    setNCliques(0);
                }
            }

            if (id == 'ce3') {
                setEstrelaCheiaEsq5(false);
                setEstrelaCheiaEsq4(false);
                setEstrelaCheiaDir5(false);
                setEstrelaCheiaDir4(false);
                setEstrelaCheiaDir3(false);

                let num = nCliques + 1
                setNCliques(num);

                if (nCliques == 0) {
                    setClicado(false);
                    setNCliques(0);
                }
            }

            if (id == 'cd2') {
                setEstrelaCheiaEsq5(false);
                setEstrelaCheiaEsq4(false);
                setEstrelaCheiaDir5(false);
                setEstrelaCheiaDir4(false);
                setEstrelaCheiaDir3(false);
                setEstrelaCheiaEsq3(false);

                let num = nCliques + 1
                setNCliques(num);

                if (nCliques == 0) {
                    setClicado(false);
                    setNCliques(0);
                }
            }

            if (id == 'ce2') {
                setEstrelaCheiaEsq5(false);
                setEstrelaCheiaEsq4(false);
                setEstrelaCheiaDir5(false);
                setEstrelaCheiaDir4(false);
                setEstrelaCheiaDir3(false);
                setEstrelaCheiaEsq3(false);
                setEstrelaCheiaDir2(false);

                let num = nCliques + 1
                setNCliques(num);

                if (nCliques == 0) {
                    setClicado(false);
                    setNCliques(0);
                }
            }

            if (id == 'cd1') {
                setEstrelaCheiaEsq5(false);
                setEstrelaCheiaEsq4(false);
                setEstrelaCheiaDir5(false);
                setEstrelaCheiaDir4(false);
                setEstrelaCheiaDir3(false);
                setEstrelaCheiaEsq3(false);
                setEstrelaCheiaDir2(false);
                setEstrelaCheiaEsq2(false);

                let num = nCliques + 1
                setNCliques(num);

                if (nCliques == 0) {
                    setClicado(false);
                    setNCliques(0);

                }
            }

            if (id == 'ce1') {
                setEstrelaCheiaEsq5(false);
                setEstrelaCheiaEsq4(false);
                setEstrelaCheiaDir5(false);
                setEstrelaCheiaDir4(false);
                setEstrelaCheiaDir3(false);
                setEstrelaCheiaEsq3(false);
                setEstrelaCheiaDir2(false);
                setEstrelaCheiaEsq2(false);
                setEstrelaCheiaDir1(false);

                let num = nCliques + 1
                setNCliques(num);


                if (nCliques == 0) {
                    setClicado(false);
                    setNCliques(0);

                }

            }

            //vazios

            if (id == 'vd5') {

                setEstrelaCheiaDir5(true);
                setEstrelaCheiaEsq5(true);


                setEstrelaCheiaDir4(true);
                setEstrelaCheiaEsq4(true);


                setEstrelaCheiaDir3(true);
                setEstrelaCheiaEsq3(true);


                setEstrelaCheiaDir2(true);
                setEstrelaCheiaEsq2(true);

                setEstrelaCheiaDir1(true);
                setEstrelaCheiaEsq1(true);


            }

            if (id == 've5') {


                setEstrelaCheiaEsq5(true);


                setEstrelaCheiaDir4(true);
                setEstrelaCheiaEsq4(true);


                setEstrelaCheiaDir3(true);
                setEstrelaCheiaEsq3(true);


                setEstrelaCheiaDir2(true);
                setEstrelaCheiaEsq2(true);

                setEstrelaCheiaDir1(true);
                setEstrelaCheiaEsq1(true);

            }


            if (id == 've5') {


                setEstrelaCheiaEsq5(true);

                setEstrelaCheiaDir4(true);
                setEstrelaCheiaEsq4(true);


                setEstrelaCheiaDir3(true);
                setEstrelaCheiaEsq3(true);

                setEstrelaCheiaDir2(true);
                setEstrelaCheiaEsq2(true);

                setEstrelaCheiaDir1(true);
                setEstrelaCheiaEsq1(true);

            }


            if (id == 'vd4') {


                setEstrelaCheiaDir4(true);
                setEstrelaCheiaEsq4(true);


                setEstrelaCheiaDir3(true);
                setEstrelaCheiaEsq3(true);


                setEstrelaCheiaDir2(true);
                setEstrelaCheiaEsq2(true);

                setEstrelaCheiaDir1(true);
                setEstrelaCheiaEsq1(true);



            }

            if (id == 've4') {


                setEstrelaCheiaEsq4(true);


                setEstrelaCheiaDir3(true);
                setEstrelaCheiaEsq3(true);


                setEstrelaCheiaDir2(true);
                setEstrelaCheiaEsq2(true);

                setEstrelaCheiaDir1(true);
                setEstrelaCheiaEsq1(true);



            }


            if (id == 'vd3') {

                setEstrelaCheiaDir3(true);
                setEstrelaCheiaEsq3(true);


                setEstrelaCheiaDir2(true);
                setEstrelaCheiaEsq2(true);

                setEstrelaCheiaDir1(true);
                setEstrelaCheiaEsq1(true);



            }

            if (id == 've3') {

                setEstrelaCheiaEsq3(true);


                setEstrelaCheiaDir2(true);
                setEstrelaCheiaEsq2(true);

                setEstrelaCheiaDir1(true);
                setEstrelaCheiaEsq1(true);



            }

            if (id == 'vd2') {



                setEstrelaCheiaDir2(true);
                setEstrelaCheiaEsq2(true);

                setEstrelaCheiaDir1(true);
                setEstrelaCheiaEsq1(true);



            }

            if (id == 've2') {

                setEstrelaCheiaEsq2(true);

                setEstrelaCheiaDir1(true);
                setEstrelaCheiaEsq1(true);



            }


            if (id == 'vd1') {


                setEstrelaCheiaDir1(true);
                setEstrelaCheiaEsq1(true);



            }

            if (id == 've1') {

                setEstrelaCheiaEsq1(true);



            }
        }

    }

    return (

        <div className='estrelas-linha'>

            <div className='estrelas'>
                {estrelaCheiaEsq1 == true

                    ? <img src={EstrelaCheiaEsquerda}
                        onMouseLeave={unselectEstrelaEsq}
                        onClick={() => { Clicks('ce1') }}></img>


                    : <img src={EstrelaVaziaEsquerda}
                        onMouseEnter={selectEstrelaEsq}
                        onClick={() => { Clicks('ve1') }}
                    ></img>

                }

                {estrelaCheiaDir1 == true

                    ? <img src={EstrelaCheiaDireita}
                        onClick={() => { Clicks('cd1') }}
                        onMouseLeave={() => { unselectEstrelaDir(); unselectEstrelaEsq(); }} ></img>


                    : <img src={EstrelaVaziaDireita}
                        onClick={() => { Clicks('vd1') }}
                        onMouseEnter={() => { selectEstrelaDir(); selectEstrelaEsq(); }} ></img>


                }


            </div>

            <div className='estrelas'>
                {estrelaCheiaEsq2 == true

                    ? <img src={EstrelaCheiaEsquerda}
                        onClick={() => { Clicks('ce2') }}
                        onMouseLeave={unselectEstEsq2} ></img>


                    : <img src={EstrelaVaziaEsquerda}
                        onClick={() => { Clicks('ve2') }}
                        onMouseEnter={selectEstEsq2}
                    ></img>

                }

                {estrelaCheiaDir2 == true

                    ? <img src={EstrelaCheiaDireita}
                        onClick={() => { Clicks('cd2') }}
                        onMouseLeave={unselectEstDir2} ></img>


                    : <img src={EstrelaVaziaDireita}
                        onClick={() => { Clicks('vd2') }}
                        onMouseEnter={selectEstDir2} ></img>


                }


            </div>

            <div className='estrelas'>
                {estrelaCheiaEsq3 == true

                    ? <img src={EstrelaCheiaEsquerda}
                        onClick={() => { Clicks('ce3') }}
                        onMouseLeave={unselectEstEsq3} ></img>


                    : <img src={EstrelaVaziaEsquerda}
                        onClick={() => { Clicks('ve3') }}
                        onMouseEnter={selectEstEsq3}
                    ></img>

                }

                {estrelaCheiaDir3 == true

                    ? <img src={EstrelaCheiaDireita}
                        onClick={() => { Clicks('cd3') }}
                        onMouseLeave={unselectEstDir3} ></img>


                    : <img src={EstrelaVaziaDireita}
                        onClick={() => { Clicks('vd3') }}
                        onMouseEnter={selectEstDir3} ></img>


                }


            </div>

            <div className='estrelas'>
                {estrelaCheiaEsq4 == true

                    ? <img src={EstrelaCheiaEsquerda}
                        onClick={() => { Clicks('ce4') }}
                        onMouseLeave={unselectEstEsq4} ></img>


                    : <img src={EstrelaVaziaEsquerda}
                        onClick={() => { Clicks('ve4') }}
                        onMouseEnter={selectEstEsq4}
                    ></img>

                }

                {estrelaCheiaDir4 == true

                    ? <img src={EstrelaCheiaDireita}
                        onClick={() => { Clicks('cd4') }}
                        onMouseLeave={unselectEstDir4} ></img>


                    : <img src={EstrelaVaziaDireita}
                        onClick={() => { Clicks('vd4') }}
                        onMouseEnter={selectEstDir4} ></img>
                }
            </div>

            <div className='estrelas'>
                {estrelaCheiaEsq5 == true

                    ? <img src={EstrelaCheiaEsquerda}
                        onMouseLeave={unselectEstEsq5}
                        onClick={() => { Clicks('ce5') }}></img>


                    : <img src={EstrelaVaziaEsquerda}
                        onMouseEnter={selectEstEsq5}
                        onClick={() => { Clicks('ve5') }}
                    ></img>

                }

                {estrelaCheiaDir5 == true

                    ? <img src={EstrelaCheiaDireita}
                        onMouseLeave={unselectEstDir5} onClick={() => { Clicks('cd5') }}></img>


                    : <img src={EstrelaVaziaDireita}
                        onMouseEnter={selectEstDir5} onClick={() => { Clicks('vd5') }}></img>
                }


            </div>

        </div>


    )

}