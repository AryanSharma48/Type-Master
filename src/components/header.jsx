import "../styles/header.css"

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src="src/images/logo.png" alt="logo" />
                <span>PokéType</span>
            </div>
        </header>
    )
}