import React, {useEffect, useState} from 'react';

import Loader from '../../components/loader';
import TriviaQuestion from '../../components/triviaQuestion';
import axios from 'axios';

import './quiz.css';

function TriviaGame() {

  const [questionList, setQuestionList] = useState(null);
  const [status, updateStatus] = useState(0);
  const [answers, setAnswer] = useState({});
  const [report, setReport] = useState(null);
  const [isSubmit, setSubmitStatus] = useState(false);

  const BASE_URL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';

  useEffect(() => {
    fetchQuestions();
  },[]);


  const fetchQuestions = () => {
    updateStatus(0);
    setSubmitStatus(false);
    setReport(null);

    axios.get(BASE_URL).then(res => {
      setQuestionList(res.data.results);
      updateStatus(1);
    }).catch(e => {
      updateStatus(-1);
      console.log(e);
    })
  }


  const renderScene = () => {
    if(status === 0){
      return <Loader />
    }else if(status === 1){
      return renderList();
    }else return <div>Error occured while fetching data..</div>
  }


  const onOptionSelect = (question, answer) =>{
    let obj = answers;
    obj[question] = answer;
    setAnswer(obj);
  }


  const renderList = () => {
    return questionList.map((trivia, index) => {
      return <TriviaQuestion submitStatus = {isSubmit} onChange={onOptionSelect} key={index} trivia = {trivia}/>
    })
  }


  const onSubmit = () => {
    let obj = {};
    let correctAnswers = questionList.filter(item => {
      return item.correct_answer === answers[item.question]
    });
    obj.correct_answers = correctAnswers.length;
    obj.total = questionList.length;
    obj.attempted = Object.keys(answers).length;
    setReport(obj);
    setSubmitStatus(true);
  }


  return (
    <div className='trivia-container'>
      <section className='trivia__question-list'>
        {renderScene()}
      </section>
      
      {status === 1 && 
      <section className='trivia__submit'>
        <button  disabled = {isSubmit} onClick={onSubmit}>Submit</button>
        <button disabled={!isSubmit} onClick={fetchQuestions}>Retry</button>
        {
          report && <div>
            Your score: {report.correct_answers} / {report.total} <br/><br/>
            You answered {report.attempted} out of {report.total} questions.
          </div>
        }
      </section>}
    </div>
  )
}

export default TriviaGame;