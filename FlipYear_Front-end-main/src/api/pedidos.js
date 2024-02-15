import server from "./server";

export async function GetAllPedidos() {
    const res = await server.get('/pedidos');
    return res
}

export async function PutPedidos(id, DS_SITUACAO) {
    JSON.stringify(DS_SITUACAO)
    const resp = await server.put(`/pedidos/${id}`, {DS_SITUACAO});
    return resp.data
}