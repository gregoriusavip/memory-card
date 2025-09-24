export default function CardButtons({ setClickedButton }) {
  function handleClick(e) {
    const button = e.currentTarget;
    setClickedButton(button);
  }

  return (
    <div className="choices">
      <button id="seen" onClick={handleClick}>
        ✅ SEEN
      </button>
      <button id="new" onClick={handleClick}>
        ❌ NEW
      </button>
    </div>
  );
}
