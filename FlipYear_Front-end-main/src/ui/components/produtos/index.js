import './index.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


import CardProdutoCtlg from '../card-produto-ctlg';

export default function Produtos(props) {

    return (
        
        <div className="products">
            <Swiper navigation={true} slidesPerView={props.CardResposiveLimit} modules={[Navigation]} className="mySwiper" data-swiper-autoplay="2000">
                {props.products.map((item) => (
                    <SwiperSlide>
                        <CardProdutoCtlg
                        preco={item.VL_PRECO}
                        idProduto={item.ID_PRODUTO}
                        nome={item.NM_PRODUTO}
                        fabricante={item.NM_FABRICANTE}
                        precoPromocao={item.VL_PRECO_PROMOCIONAL}
                        estado={item.TP_ESTADO}
                        promocao={item.BT_PROMOCAO}
                        avaliacao={item.VL_AVALIACAO}
                        colecionador={item.TP_COLECIONADOR}
                        imgs={{
                            ImgFrente: item.FRENTE,
                            ImgTras: item.TRAS,
                            ImgLadoDir: item.LADO_DIREI,
                            ImgLadoEsq: item.LADO_ESQ,
                        }}
                       
                    /></SwiperSlide>
                ))
                }
            </Swiper>

        </div>
    )
}