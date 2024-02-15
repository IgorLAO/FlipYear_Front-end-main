import './style.scss';

export default function MoreOP(props) {

    return (
        <main id='MainM_Op' className='Main_MoreOP' style={{width: props.WidthDisplay, display: props.Display}}>
            <div>
                Deletar
            </div>

            <div>
                Editar
            </div>
        </main>
    );
}