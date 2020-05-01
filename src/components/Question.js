import React from 'react';


function onButtonClick(e) {
    e.preventDefault()
    alert("I click an answer");
}

function Answer(props) {
    return <button onClick={onButtonClick} className="buttonAnswer" >{props.label} </button>

}
const Question = (props) => {
    console.log(props.data);
    const answerList = props.data.answers.map(
        function renderAnswer(answer) {
            return <Answer label={answer.label} key={answer.value}></Answer>
        }
    );
    return <div className="question">
        <h1 > {props.data.text} </h1>
        <div >
            {
                answerList
            }
        </div>
    </div>
}

export default Question