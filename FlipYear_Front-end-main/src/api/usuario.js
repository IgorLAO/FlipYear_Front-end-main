import server from "./server";


export async function Login2(email, senha) {
    const r = await server.post("/usuarios/login", {
        Email: email,
        Senha: senha
    });

    console.log(r);
    return r
}

export async function GetUserById(id) {
    const resp = await server.get(`/usuario/${id}`);
    return resp
}

export async function EnviarImagem(id, Profile) {
    const formData = new FormData();
    
    formData.append('user', Profile)

    const res = await server.put(`/imagem/usuario/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });

    return res.data;
}


export async function EnviarDefaultImagem(img) {
    const res = await server.post('/imgs', img);
    return res;
}


export function GetProfileImage(ProfIMG) {

    return `${server.getUri()}/${ProfIMG}`
}

export async function InsertEnderecos(infosEndereco) {
    const respEndereco = await server.post('/enderecos', infosEndereco);
    return respEndereco
}

export async function InsertUsuario(infosPessoa) {
    const respUser = await server.post('/usuarios', infosPessoa);
    console.log(respUser)
    return respUser
}

// -----ADM
export async function ADMSearchUsers(searchText) {
    const resp = await server.get(`/usuarios/busca?search=${searchText}`);
    return resp
}

export async function GeAllUsers() {
    const resp = await server.get(`/usuarios`);
    return resp
}
