
function Header(){
    return(
        <header>
            <h1>SAM</h1>
            <p>Banana</p>
        </header>
    )
}

function App(){
    return(<>
        <Header></Header>
        <h2>React</h2>
        <p>GG</p>

    </>)
}

ReactDOM.createBoot(document.querySelector("#root")).render(App())