import RainbowText from "./RainbowEffect";

export default function Redirect({ className, onClick }) {
  return (
    <div className={className}>
      <div className="flex  justify-center "><RainbowText>[projects]</RainbowText></div>
      <div className="flex  justify-center pt-2">
        <button onClick={onClick} className="rotate-270 cursor-pointer animate-hover-effect">
          <RainbowText>&lt;</RainbowText>
        </button>
      </div>
    </div>
  );
}
