import Button from "./Button";

export default function CardButtons({ isClicked }) {
    function handleClick() {
        isClicked(true);
    }

    return (
        <div className='choices'>
            <Button className="seen-btn" text="✅ SEEN" handleClick={handleClick}></Button>
            <Button className="new-btn" text="❌ NEW" handleClick={handleClick}></Button>
        </div>
    );
}