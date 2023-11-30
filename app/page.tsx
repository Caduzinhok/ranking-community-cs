import Header from "./components/Header";
import Ranking from "./components/Ranking";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Ranking />
    </div>
    
  )
}
