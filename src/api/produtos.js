import server from "./server";

export async function GetSearchProd(infos) {
    try {
        let res = await server.get(`/produto/busca?search=${infos}`);
        return res;        
    } catch (error) {
        return 'nada'
    }
  

}
export async function ConsultarProdPorId(id) {
    const resp = await server.get(`/produtos/${id}`);
    return resp.data[0];
}

export async function GetAllProd() {
    const resp = await server.get(`/produtos`);
    return resp
}

export async function GetAllProdDestaque() {
    const resp = await server.get(`/produtosAllDestaque`);
    return resp
}

export async function GetPagProdDestaque(pageDestaqueNum) {
    const resp = await server.get('/produtosDestaque?pagina=' + pageDestaqueNum);
    return resp
}

export async function GetOthersProd(pageProducts) {
    const resp = await server.get('/outrosprodutos?pagina=' + pageProducts);
    return resp
}

export async function GetBusca() {
    const resp = await server.get('/produtos/busca');
    return resp
}

export async function GetAllCmts() {
    const resp = await server.get(`/AllComentarios`);
    return resp
}

export async function GetCmtsPage(pageComments) {
    const resp = await server.get(`/comentarios?pagina=${pageComments}`)
    return resp
}

export async function InsertComments(idUsuario, idProduto, comentario, data, likes, denuncia) {
    const resp = await server.post('/comentarios', {
        idUsuario: idUsuario,
        idProduto: idProduto,
        comentario: comentario,
        data: data,
        likes: likes,
        denuncia: denuncia
    });

    return resp;
}


export async function InsertProdImages(i) {
    const formData = new FormData();

    formData.append('Frente', i.Frente);
    formData.append('LadoEsq', i.LadoDir);
    formData.append('LadoDir', i.LadoDir);
    formData.append('Tras', i.Tras);

    const resp = await server.post(`/imagem/produto`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return resp
}

export function GetUrlImage(img) {
    console.log(`${server.getUri()}/${img}`)
    return `${server.getUri()}/${img}`
}

export async function InsertProd(i) {
    const resp = await server.post('/produtos', i);

    return resp
}

export async function Delete(i) {
    const resp = await server.delete(`/produtos/${i}`);
    return resp
}

export async function Getcatego() {
    const resp = await server.get('/categoria');
    return resp
}

export async function ProdsImg(id) {
    const resp = await server.get('/produtosImg/' + id)
    return resp;
}
