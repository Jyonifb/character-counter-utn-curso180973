const Stats = ({characters, words, sentences}) => {
    return(
    <div class="cards">
        <p>Cantidad de caracteres: {characters}</p>
        <p>Cantidad de palabras: {words}</p>
        <p>Cantidad de oraciones: {sentences}</p>
        
    </div>
    )
}

export { Stats }