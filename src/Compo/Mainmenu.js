import React, { useContext } from 'react';
import  {QuizContext } from "../Helpers/Context";
import '../App.css';


 function  Mainmenu() {
    const{ setGameState} = useContext (QuizContext);
    
        return(
           <div className ="menu">

          <button onClick={ () =>{
              setGameState("quiz");
          }}>Start Quiz</button>

           </div>
        );
    }

export default Mainmenu;