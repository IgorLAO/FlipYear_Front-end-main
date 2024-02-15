import server from "./server";

export async function ConsultaCarrinho(idUser){
    const resp = await server.get(`/carrinho/${idUser}`);
    return resp.data
}

export async function InserirProdutoNoCarrinho(idProduto, idUser, qtdProduto){
    const resp = await server.post(`/carrinho/`, {
        idProduto:idProduto,
        idUser:idUser,
        qtdProduto:qtdProduto
    }); 

    return resp;
}