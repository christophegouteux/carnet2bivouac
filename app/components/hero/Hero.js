import HeroTitle from "./HeroTitle";
import HeroQuote from "./HeroQuote";
import ScrollIndicator from "./ScrollIndicator";
import HeroCounter from "./HeroCounter";
import { heroQuotes } from "../../data/heroQuotes"

const adventureCount = 1;   

export default function Hero() {
  const randomCountQuote = Math.floor(Math.random() * heroQuotes.length);
  const quote = heroQuotes[randomCountQuote].quote
  
  return (
    <div className="hero"> 
      <HeroTitle />
      <HeroQuote quote={quote} />
      <HeroCounter adventureCount={adventureCount} />
      <ScrollIndicator />
  </div>
  )
}
