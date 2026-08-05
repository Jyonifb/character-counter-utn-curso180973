import { useState } from "react"

const Header = ({dark, handleDarkTheme}) => {

    return  <header>
        <div>
            <img class="img-logo" src="./src/assets/icono-logo.png" alt="icono del logo"/>            
            <h1 class="character">Character Counter</h1>
        </div>
        <button onClick={() => handleDarkTheme(!dark)} class="theme-button">☀</button>
    </header>
}

export { Header }