const Stats = ({characters, words, sentences}) => {
    return(
    <section class="cards">    
        <div class="card" id="purple">
            <h2>{characters}</h2>
            <p>Cantidad de caracteres</p>          
        </div>
        <div class="card" id="orange">
            <h2>{words}</h2>
            <p>Cantidad de palabras</p>          
        </div>
        <div class="card" id="darkorange">
            <h2>{sentences}</h2>
            <p>Cantidad de oraciones</p>          
        </div>
    </section>
    )
}

export { Stats }