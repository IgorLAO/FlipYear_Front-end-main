import './style.scss'

import GhostNotFound from '../../../assets/images/Search/ghostNotFound.png'

const SearchCard_NotFound = (props) => {
    return (
        <div className="Main_SearchCard_NotFound ">
            <img src={GhostNotFound} id='grande' />

            <span style={{}}>
                <img src={GhostNotFound} id='peq_G' />
                <a> Produto não Encontrado</a>
            </span>
            <img src={GhostNotFound} id='' style={{width: 9+'%'}} />
        </div>
    );
}

export default SearchCard_NotFound;      