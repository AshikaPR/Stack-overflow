import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {

  const location= useLocation();
  var User= 1
  const navigate= useNavigate();

  const questionsList = useSelector ((state) => state.questionsReducer);
  console.log(questionsList)

/* var questionsList=[{
    _id: '1',
    upVotes: 3,
    downVotes: 2,
    votes:1,
    NoofAnswers: 2,
    QuestionTitle: 'What is a function?',
    QuestionBody: 'It meant to be',
    QuestionTags: ['Java', 'node js', 'react js', 'mongodb'],
    userPosted: 'Ashika',
    askedOn: 'Jan 1',
    answer: [{
      answerBody: 'Answer',
      userAnswered: 'Kumar',
      answeredOn: 'Jan 2',
      userId: 2
    }]
  },
  {
    _id: '2',
    upVotes: 3,
    downVotes: 2,
    votes: 2,
    NoofAnswers: 2,
    QuestionTitle: 'What is a function?',
    QuestionBody: 'It meant to be',
    QuestionTags: ['Java', 'node js', 'react js', 'mongodb'],
    userPosted: 'Ashika',
    askedOn: 'Jan 1',
    answer: [{
      answerBody: 'Answer',
      userAnswered: 'Kumar',
      answeredOn: 'Jan 2',
      userId: 2,
    }]
  },
  {
    _id: '3',
    upVotes: 3,
    downVotes: 2,
    votes: 3,
    NoofAnswers: 2,
    QuestionTitle: 'What is a function?',
    QuestionBody: 'It meant to be',
    QuestionTags: ['Java', 'node js', 'react js', 'mongodb'],
    userPosted: 'Ashika',
    askedOn: 'Jan 1',
    answer: [{
      answerBody: 'Answer',
      userAnswered: 'Kumar',
      answeredOn: 'Jan 2',
      userId: 2,
    }]
  }]*/

  const checkAuth = () => {
    if(User===null){
      alert("login or signup to ask a question")
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>
        }
      
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        </div>
        <div>{
          questionsList.data===null ? <h1>Loading...</h1>:
          <>
           <p>{questionsList.data.length} questions</p>
          </>
          }
          <QuestionsList questionsList = {questionsList.data}></QuestionsList>
          
          
      </div>
    </div>
  )
}

export default HomeMainbar
