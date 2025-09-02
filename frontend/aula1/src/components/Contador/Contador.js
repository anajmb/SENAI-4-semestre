import { useEffect, useState } from "react";



function Contador() {
    const [contador, setContador] = useState(0);

    // arrow function
    const incrementar = () => {
        setContador(contador + 1);
    }
    
    useEffect(() => {
        console.log("É executado toda vez que o valor é trocado...");
        console.log(contador);
    }, [contador])

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default Contador;