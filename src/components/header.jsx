import "../styles/Header.css"

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src="src/images/pokeball.png" alt="logo" />
                <span><span className="poke-red">Poké</span>Type</span>
            </div>
        </header>
    )
}