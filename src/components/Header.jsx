import { useState } from "react"

const Header = ({dark, handleDarkTheme}) => {

    return  <header >
        <div>
            <img className="img-logo" src="/icono-logo.png" alt="icono del logo"/>            
            <h1 className="character">Character Counter</h1>
        </div>
        <button onClick={() => handleDarkTheme(!dark)} className="theme-button">☀</button>
    </header>
}

export { Header }