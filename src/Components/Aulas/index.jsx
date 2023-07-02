import './Aulas.css'

const Aulas = ({tituloAula, children}) => {
    return(
        <section className='aulas'>
            <h2> {tituloAula} </h2>
            <div className="cards">
                {children}
            </div>
            <hr />
        </section>
    )
}

export default Aulas