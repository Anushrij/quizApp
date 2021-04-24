

import './App.css';
import React, {useState} from 'react';
import Mainmenu from './Compo/Mainmenu';
import Quiz from './Compo/Quiz';
import EndScreen from './Compo/EndScreen';
import {QuizContext} from "./Helpers/Context";
function App() {
  const [gameState,setGameState]=useState("menu");
  const [score,setScore]=useState(0);
  return (
    <div className="App">
        <h1>Quiz App</h1>
        <QuizContext.Provider value = {{ gameState,setGameState,score,setScore, }}>
          {gameState === "menu" && <Mainmenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "endScreen" && <EndScreen/>}
          </QuizContext.Provider>
    
    </div>
  )
}

export default App;
