import React from "react";

function QuestionItem({ question, handleDeleteQuestion, handleUpdatedQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
    
  function handleDeleteClick () {
    
    fetch (`http://localhost:4000/questions/${id}`,{
      method : "DELETE"
    })
    .then (r => r.json())
    .then (() => handleDeleteQuestion(question))
  }

  function handleIndexChange (e) {
    const correctedIndex = e.target.value
    fetch (`http://localhost:4000/questions/${id}`, {
      method : "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
      {
        "correctIndex": `${correctedIndex}`
      }),
    })
    .then(r => r.json())
    .then((updatedQuestion) => handleUpdatedQuestion(updatedQuestion))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleIndexChange}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
