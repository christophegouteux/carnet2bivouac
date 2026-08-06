export default function HeroCounter({ bivouacCount }) {
  return (
      <p>{bivouacCount} bivouac{bivouacCount > 1 && ('s') }</p>
  );
}
