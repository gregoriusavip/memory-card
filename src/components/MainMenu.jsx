import PlayButtons from "./PlayButtons"

export default function MainMenu() {

    return (
        <section id="main-menu">
            <div className="container">
                <h1>Pokemon Memory Game</h1>
                <p>Memorize the pokemon on your screen. Try to catch them all!</p>
                <PlayButtons />
            </div>
        </section>
    )
}