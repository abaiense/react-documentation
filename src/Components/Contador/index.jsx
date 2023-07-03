import './Contador.css'
import { useState } from 'react'

function Botao(){
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return(
        <button onClick={handleClick}>
            Clicado {count} vezes
        </button>
    );
}

const Contador = () => {
    return(
        <div>
            <h1>Os Botoes funcionam individualmente</h1>
            <Botao />
        </div>
    )
}

export default Contador