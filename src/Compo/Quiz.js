import React ,{ useState,useContext } from 'react';

import { QuizContext } from "../Helpers/Context";
import {Question} from '../Helpers/QuestionBank';

 function Quiz () {
    const [currQuestion,setCurrQuestion] = useState(0);
    const [optionChosen,setOptionChosen] = useState("");
    const {score,setScore,gameState,  setGameState} = useContext (QuizContext);
      
    const chooseOption = (option) => {
        setOptionChosen(option);
      };

    const nextQuestion=()=>{
          if(Question[currQuestion].Answer == optionChosen){
              setScore(score+1);
          }
          
          
           setCurrQuestion(currQuestion +1);
    }


    const finishQuiz =() =>{
        if(Question[currQuestion].Answer == optionChosen){
            setScore(score+1);
        } 
    
        setGameState("endScreen");
    };

        return(
           <div className = "quiz"> 
           <h1> {Question[currQuestion].prompt}</h1>
           <div className = "options">
              <button onClick = { () => {chooseOption("A")} }> {Question [currQuestion].option_A}  </button>
              <button  onClick = { () => {chooseOption("B")}}> {Question[currQuestion].option_B } </button>
              <button  onClick = { () => {chooseOption("C")}}> {Question[currQuestion].option_C } </button>
              <button onClick = { () => {chooseOption("D")}}> {Question [currQuestion].option_D } </button>


           </div>
           {currQuestion == Question.length - 1  ? (
               <button onClick = {finishQuiz} className="finish">Finish Quiz</button>
           ) : (
             <button onClick = {nextQuestion} className="next">Next Question</button>)}
           </div> 
        );
    }

export default Quiz;