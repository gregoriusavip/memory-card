import Button from "./Button"
import '../styles/playButton.css'

export default function GameButtons({ options, setOptions }) {
    return (
        <div className="button-container">
            <Button text='GENERATION 1' options={options} setOptions={setOptions} id={1}></Button>
            <Button text='GENERATION 2' options={options} setOptions={setOptions} id={2}></Button>
        </div>
    )
}