import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({ questionList , handleDeleteQuestion, handleUpdatedQuestion }) {
  
  const displayedQuestions = questionList.map((question) => {
    return <QuestionItem key={question.id} question={question} handleDeleteQuestion={handleDeleteQuestion} handleUpdatedQuestion={handleUpdatedQuestion}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayedQuestions}</ul>
    </section>
  );
}

export default QuestionList;
