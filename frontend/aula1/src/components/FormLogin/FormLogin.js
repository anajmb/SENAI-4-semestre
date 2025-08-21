import { useState } from "react";

function FormLogin () {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <>
            <h1>Form Login</h1>
            <div>
                <label>E-mail</label>
                <input onChange = {(evento) => setEmail(evento.target.value)} type="mail" placeholder="Digite seu email"/>
            </div>
            <div>
                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" />
            </div>

            <button>Entrar</button>
        </>
    )
}

export default FormLogin;