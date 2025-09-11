import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

interface Produto {
  id: number,
  nome: string,
  quantidade: number;
}

function App() {
  const [ produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    // Função para pegar produtos
    getProdutos();
  }, [])

  // async - await
  async function getProdutos () {
    // acessar a API em nodejs
    const resposta = await axios.get("http://10.92.199.14:8080/produtos")

    // infos -> resposta.data
    console.log(resposta.data.produtos);
    setProdutos(resposta.data.produtos);
  }

  
  return (
    <>
     {produtos.map((prod) => (
      <div>
        <h1>{prod.id} - {prod.nome}</h1>
        <p>Quantidade no Estoque: {prod.quantidade}</p>
      </div>
     ))}
    </>
  )
}

export default App
