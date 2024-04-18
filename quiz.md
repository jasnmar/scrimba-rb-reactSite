

    Quiz!
1. What is a React component?
A function that returns a single JSX item

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
Not capitalized
3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
The renders statment should be
ReactDOM.render(<Header />, document.getElementById("root"))

