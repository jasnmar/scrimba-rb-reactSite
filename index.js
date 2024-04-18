
/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
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
