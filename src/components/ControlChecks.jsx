const ControlChecks = ({ 
    excludeSpaces, 
    handleExcludeSpaces,
    limitCharacter, 
    handleChangeInputLimit, 
    limitValue, 
    handleLimitValue,
    readingTime }) => {

    return <section className="checks">
        <div className="checksd">
          <label className="checkbox">
            <input
              type="checkbox" 
              checked={excludeSpaces}
              onChange={() => handleExcludeSpaces
              (!excludeSpaces)}
            />
            Excluir espacios
          </label>
          <label className="checkbox">
            <input
              type="checkbox" 
              checked={limitCharacter}
              onChange={handleChangeInputLimit}
            />
            Límite de caracteres
          </label>
        
        {
          limitCharacter && <input
          type="number" 
          value={limitValue}
          onChange={(e) => handleLimitValue(e.target.value)}
        />
        }
        </div>
        <p className="reading-time">Tiempo aprox de Lectura &lt; {readingTime} min</p>
      
      </section>


}

export { ControlChecks }