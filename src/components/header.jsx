import "../styles/header.css"

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src="/src/images/logo.png" alt="logo" />
                <span>TypeMaster</span>
            </div>
            <div className="nav">
                <span>About</span>
            </div>
        </header>
    )
}