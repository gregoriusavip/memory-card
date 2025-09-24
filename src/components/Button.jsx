import '../styles/button.css'

export default function Button({ text, handleClick, className = 'btn' }) {
    return (
        <button className={className} onClick={handleClick}>
            {text}
        </button>
    )
}