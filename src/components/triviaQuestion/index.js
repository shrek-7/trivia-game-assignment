import React, {useEffect, useState} from 'react';
import './triviaQuestion.css'

function TriviaQuestion(props) {
  
  const { submitStatus, onChange, trivia } = props;
  
  const [isFormSubmitted, updateFormState] = useState(false);

  
  useEffect(() => {
    updateFormState(submitStatus);
  }, [submitStatus])
  


  const unescapeHTML = (html) => {
    var escapeEl = document.createElement('textarea');
    escapeEl.innerHTML = html;
    return escapeEl.textContent;
  }


  const onOptionSelect = e =>{
    onChange(e.target.name, e.target.id);
  }


  const getOptions = (list) => {
    let allOptions = [...list.incorrect_answers, list.correct_answer];

    return allOptions.map((item, index) =>{
      return <div key={index} className={`flex flex-align-center ${isFormSubmitted && list.correct_answer === item && 'correct-answer'}`}>
        <input onChange={onOptionSelect} type="radio" id={item}  name={list.question}/>
        <label htmlFor={item}>{unescapeHTML(item)}</label>
        </div>
    });
  }
  
  return (
    <div className = "trivia-question">
      {unescapeHTML(trivia.question)}
      <div className="trivia-options">
        {getOptions(trivia)}
      </div>
    </div>
  )
}

export default TriviaQuestion
