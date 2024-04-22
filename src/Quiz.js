// Quiz.js

import React, { useState } from 'react';
import Question from './Question';

const questionsData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Jupiter', 'Saturn', 'Earth'],
    correctAnswer: 'Jupiter'
  },
  // Add more questions here...
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < questionsData.length ? (
        <Question
          question={questionsData[currentQuestion].question}
          options={questionsData[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
