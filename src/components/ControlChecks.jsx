const ControlChecks = ({ 
    excludeSpaces, 
    handleExcludeSpaces,
    limitCharacter, 
    handleChangeInputLimit, 
    limitValue, 
    handleLimitValue,
    readingTime }) => {

    return <section class="checks">
        <div class="checks">
          <label class="checkbox">
            <input
              type="checkbox" 
              checked={excludeSpaces}
              onChange={() => handleExcludeSpaces
              (!excludeSpaces)}
            />
            Excluir espacios
          </label>
          <label class="checkbox">
            <input
              type="checkbox" 
              checked={limitCharacter}
              onChange={handleChangeInputLimit}
            />
            Límite de caracteres
          </label>
        </div>
        {
          limitCharacter && <input
          type="number" 
          value={limitValue}
          onChange={(e) => handleLimitValue(e.target.value)}
        />
        }
        <p class="reading-time">Tiempo aprox de Lectura &lt; {readingTime} min</p>
      
      </section>


}

export { ControlChecks }