import { ProgressBar } from "./ProgressBar"

const LetterDensity = ({ sortLetters, }) => { 

    return (
            <section class="density">
                <h3>Densidad de Letras</h3>
                {/*<button onClick={() => setShowAll(!showAll)}>{showAll ? "Ver Menos ▲" : "Ver Todos ▼" }</button>*/}
                <article>
                    <ul class="density-list">
                        { 
                        sortLetters.slice(0,5).map(letter => <ProgressBar key={letter.letterName} letter ={letter}/> )
                        }
                    </ul>
                </article>

                <details>
                    <summary class="see-more">See more</summary>
                    <ul className="density-list">
                        { 
                        sortLetters.slice(5, sortLetters.length).map(letter => <ProgressBar key={letter.letterName} letter ={letter}/>)
                        }
                    </ul>
                </details>
            </section>
    )




}

export { LetterDensity }