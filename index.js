/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/
    function Header() {
        return (
            <header>
                <nav className="top-nav">
                    <img src="./react-logo.png" height="40px" width="40px" alt="react logo"/>
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
    
    function Page() {
        return (
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        )
    }
    function Footer() {
        return (
            <p>© 2024 Martin development. All rights reserved.</p>
        )
    }
    
    function All() {
        return (
            <div>
                <Header />
                <Page />
                <Footer />
            </div>
        )
    }
    ReactDOM.render(<All />, document.getElementById("root"))
