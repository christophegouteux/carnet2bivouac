export default function HeroCounter({ adventureCount }) {
  return (
      <p className="heroCounter">{adventureCount} aventure{adventureCount > 1 && ('s') }</p>
  );
}
