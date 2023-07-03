import { useState } from 'react'

const ButtonContadorJuntos = () => {

    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return(
        <div>
            <p>Valores Juntos</p>
            <BotaoJuntos count={count} clicado={handleClick} />
            <BotaoJuntos count={count} clicado={handleClick} />
        </div>
    )
}

function BotaoJuntos({count, clicado}) {
    return(
        <button onClick={clicado}> Clicado {count} vezes </button>  
    )
}

export default ButtonContadorJuntos

