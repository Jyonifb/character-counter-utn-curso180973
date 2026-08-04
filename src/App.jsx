import { useState } from "react"
import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"
import { ControlChecks } from "./components/ControlChecks.jsx"
import { Stats } from "./components/Stats.jsx"

const App = () => {

  const [text, setText] = useState ("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.")
  
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitcharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(10)
  const [showAll, setShowAll] = useState(false)

  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces)
  }

  const handleLimitValue = () => {
    setLimitValue(!limitValue)
  }

  const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/g).length

  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/g).filter(item => item.trim() !== "").length

  const readingTime = Math.ceil(words/200)

  

  const handleChangeTextarea = (e) => {

    const value = e.target.value

    if (limitCharacter) {
      if (value.length  <= limitValue ) {
        setText(value)
      }
    } else {
        setText(value)
    }
    
  }

  const handleChangeInputLimit = () => {
    setLimitcharacter (!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(newText)

  }

  const cleanText = text.toLowerCase().replace(/[^a-záéíóú0-9ñü]/g, "")
  const totalLetter = cleanText.length

  const dictionaryLetters = {} 

  cleanText.split("").forEach(letter => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
  })

  const letters = Object.entries(dictionaryLetters).map(dataLetter => {
    const letter = dataLetter[0]
    const amountLetter = dataLetter[1]

    const infoToRenderLetter = {
      letterName: letter,
      amount: amountLetter,
      percentage: (amountLetter/totalLetter*100)
    }
    return infoToRenderLetter
  })

  console.log(letters)

  const sortLetters = letters.sort((a, b) => b.amount - a.amount)

  const visibleLetters = showAll ? sortLetters : sortLetters.slice(0,5)

  return (
    
    <main>
      <Header />
      <h2>Analyze your text <br />
        in real-time.</h2>

      <WriteArea
      handleChangeTextarea={handleChangeTextarea}
      text ={text}
      />
      
      <ControlChecks
        excludeSpaces ={excludeSpaces} 
        handleExcludeSpaces ={handleExcludeSpaces}
        limitCharacter ={limitCharacter} 
        handleChangeInputLimit ={handleChangeInputLimit} 
        limitValue ={limitValue} 
        handleLimitValue ={handleLimitValue}
      />

      <Stats 
      characters ={characters} 
      words ={words}
      sentences ={sentences}
      readingTime ={readingTime}
      />

      <section>
        <h2>Cantidad de Letras</h2>
        {/*<button onClick={() => setShowAll(!showAll)}>{showAll ? "Ver Menos ▲" : "Ver Todos ▼" }</button>*/}
        <article>
         { 
          sortLetters.slice(0,5).map(letter => 
          <div key={letter.letterName}>
            <span>{letter.letterName.toUpperCase()}</span>
            <meter min="0" max="100" value={letter.percentage}></meter>
            <span>{letter.amount} ({letter.percentage.toFixed(2)}%)</span>
          </div> )
          }
        </article>

      <details>
        <summary>See more</summary>
        <ul className="meter-list">
          { 
          sortLetters.slice(5, sortLetters.length).map(letter => 
          <div key={letter.letterName}>
            <span>{letter.letterName.toUpperCase()}</span>
            <meter min="0" max="100" value={letter.percentage}></meter>
            <span>{letter.amount} ({letter.percentage.toFixed(2)}%)</span>
          </div> )
          }
        </ul>
      </details>
      </section>

    </main>
    
    
  )
}

export { App }
