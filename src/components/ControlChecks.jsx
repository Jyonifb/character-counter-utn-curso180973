const ControlChecks = ({ 
    excludeSpaces, 
    handleExcludeSpaces,
    limitCharacter, 
    handleChangeInputLimit, 
    limitValue, 
    handleLimitValue,
    readingTime }) => {

    return <div>
        <label >
        <input
          type="checkbox" 
          checked={excludeSpaces}
          onChange={() => handleExcludeSpaces
          (!excludeSpaces)}
        />
        Excluir espacios
        </label>
        <label >
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
        <p>Tiempo aprox de Lectura &lt; {readingTime} min</p>
      </div>


}

export { ControlChecks }