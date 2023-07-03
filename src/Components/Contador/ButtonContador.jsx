import './Contador.css'
import { useState } from 'react'

const ButtonContador = () => {

    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return(
        <button onClick={handleClick}> Clicado {count} vezes </button>
    )
}

export default ButtonContador