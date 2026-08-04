const ControlChecks = () => {

    return <div>
        <label >
        <input t
          type="checkbox" 
          checked={excludeSpaces}
          onChange={() => setExcludeSpaces
          (!excludeSpaces)}
        />
        Excluir espacios
        </label>
        <label >
        <input t
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
          onChange={(e) => setLimitValue(e.target.value)}
        />
        }
      </div>


}

export { ControlChecks }