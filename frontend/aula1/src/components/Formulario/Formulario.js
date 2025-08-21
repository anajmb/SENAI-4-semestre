import { useState } from "react";

function Formulario() {
 // Campo para armazenar valor do input 
 const [nome, setNome] = useState("");

 // Trocar o valor do nome
 const handleTrocarNome = (evento) => {
   console.log(evento.target.value);
   setNome(evento.target.value);
 } 

 // Disparar o formulário
 const handleSubmit = (evento) => {
    evento.preventDefault()
    alert(`Nome do usuário: ${nome}`)    
 } 

 return (
    <form onSubmit={handleSubmit}>
        <label>digite seu nome:</label>
        <input onChange={handleTrocarNome} type="text" placeholder="Digite seu nome..." />
        <button type="submit">Enviar</button>
    </form>
 )
}

export default Formulario;