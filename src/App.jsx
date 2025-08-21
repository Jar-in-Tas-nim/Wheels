import { useState } from "react";

const App = () => {
  let heroData = [
    { text1: "Fuel", text2: "your passion" },
    { text1: "Chase what", text2: "excites you" },
    { text1: "Let your love", text2: "lead the way" },
  ];

  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);
  return ( 
  <div className="m-0 p-0 w-screen h-screen">
    <background playStatus = {playStatus} heroCount = {heroCount}/>
  </div>
  )
};

export default App
