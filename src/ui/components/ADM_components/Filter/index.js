import { useState } from "react";
import "./style.scss"

export default function Filter() {
    const [selectdOptionStyle, setSelectdOptionStyle] = useState('');
    const [isHide_X, setisHide_X] = useState(false);

    const HandleStyleSelected = (e) => {
        setSelectdOptionStyle("SelectedOption");
        setisHide_X(true);

        if (isHide_X && selectdOptionStyle) {
            setSelectdOptionStyle("");
            setisHide_X(false);
        }
    }
    return (

        <div className="Filters">
            <div className="Tipos">
                <span style={{ marginBottom: 10 }}>
                    <h4> tipo do produto </h4>
                    <hr />
                </span>
                <span className="options">

                    <span className="option" value='aa' onClick={e => HandleStyleSelected(e.target.value)} id={selectdOptionStyle} >
                        {isHide_X && <a style={{ marginRight: 5 }} > x </a>}  <a> Consoles </a>
                    </span>
                    <span className="option" onClick={e => HandleStyleSelected(e.target.value)} id={selectdOptionStyle}>
                        {isHide_X && <a style={{ marginRight: 5 }} > x </a>}  a
                    </span>
                    <span className="option" onClick={e => HandleStyleSelected(e.target.value)} id={selectdOptionStyle}>
                        {isHide_X && <a style={{ marginRight: 5 }} > x </a>}  aa
                    </span>
                    <span className="option" onClick={e => HandleStyleSelected(e.target.value)} id={selectdOptionStyle}>
                        {isHide_X && <a style={{ marginRight: 5 }} > x </a>}  4354654654aa
                    </span>
                </span>
            </div>

            <div className="Tipos">
                <span style={{ marginBottom: 10 }}>
                    <h4> status </h4>
                    <hr />
                </span>
                <span className="options">

                    <span className="option">
                        x <a> Não entregue </a>
                    </span>
                    <span className="option">
                        x   Em transito
                    </span>
                    <span className="option">
                        x  aa
                    </span>
                    <span className="option">
                        x  Saiu para entrega
                    </span>

                    <span className="option">
                        x  Entregue
                    </span>

                    <span className="option">
                        x  pendente
                    </span>
                </span>
            </div>
            <div className="Tipos">
                <span style={{ marginBottom: 10 }}>
                    <h4> Data </h4>
                    <hr />
                </span>
                <span className="options">

                    <span className="option" id="">
                        x <a> Consoles </a>
                    </span>
                    <span className="option">
                        x  a
                    </span>
                    <span className="option">
                        x  aa
                    </span>
                    <span className="option">
                        x  4354654654aa
                    </span>
                </span>
            </div>

        </div>
    );
}