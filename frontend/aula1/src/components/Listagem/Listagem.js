import { useEffect, useState } from "react";

function Listagem() {

const [usuarios, setUsuarios] = useState([]); // [] = varios objetos e () = um valor/objetos
const [loading, SetLoading] = useState(true);

useEffect(() =>  {

    setTimeout(() => {
        const dados = [
            {id: 1, nome: 'Ana'},
            {id: 2, nome: 'Gaby'},
            {id: 3, nome: 'Pedro'}
        ]

        setUsuarios(dados);
        SetLoading(false);

    }, 3000)
}, []);


    return(
        <div>
            <h1> Lista de Produtos</h1>

            {loading ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    { usuarios.map((usuario) => (
                        <li key={usuario.id}>{usuario.nome}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Listagem;