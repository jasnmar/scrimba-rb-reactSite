/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/
//I did this from the beginning.
//The instructor just added everything to the Page function

    function Header() {
        return (
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" alt="react logo"/>
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
