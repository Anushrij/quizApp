
import React, { useContext } from 'react';
import  {QuizContext } from "../Helpers/Context";
import '../App.css';
import {Question} from "../Helpers/QuestionBank"

export function EndScreen (){
  const {score,setScore,setGameState }=useContext(QuizContext);
    const restart = () => {
        setScore(0);
        setGameState ("menu");
    }
        return(
           <div className="End"> 
           
           <h1>Quiz Finished</h1>
           <h2> {score} / {Question.length}{ " "} </h2>
           <button onClick = {restart}>Restart Quiz</button>
           </div>
        )
    
}
export default EndScreen;