/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/
    function Header() {
        return (
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" alt="react logo"/>
                    <ul>
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
