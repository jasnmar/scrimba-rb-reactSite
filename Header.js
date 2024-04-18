function Header() {
    return (
        <header>
            <nav className="top-nav">
                <img className="logo" src="./react-logo.png" alt="react logo"/>
                <ul className="menu">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <h1>Reasons to learn react</h1>
        </header>
    )
}

export default Header