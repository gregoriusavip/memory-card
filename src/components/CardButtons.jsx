import Button from "./Button";

export default function CardButtons() {
    return (
        <div className='choices'>
            <Button className="seen-btn" text="✅ SEEN"></Button>
            <Button className="new-btn" text="❌ NEW"></Button>
        </div>
    );
}