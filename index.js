
/**
Challenge: move the Footer and MainContent components
into their own files.
*/

import Header from "Header.js"
import MainContent from "./MainContent.js"
import Footer from "./Footer.js"


    
    function All() {
        return (
            <div>
                <Header />
                <MainContent />
                <Footer />
            </div>
        )
    }
    ReactDOM.render(<All />, document.getElementById("root"))
