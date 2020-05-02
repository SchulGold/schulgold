import React from 'react';
import Answer from './Answer'




function renderAnswer(answer) {
    return <Answer label={answer.label} isCorrect={false} key={answer.value} color={answer.color}></Answer>
}
const Question = (props) => {
    console.log(props.data);

    return <div className="question">
        <h1 > {props.data.text} </h1>
        <div className="answerListContainer">
            <div className="answerRow">
                {renderAnswer(props.data.answers[0])}
                {renderAnswer(props.data.answers[1])}

            </div>

            <div className="answerRow">
                {renderAnswer(props.data.answers[2])}
                {renderAnswer(props.data.answers[3])}

            </div>
        </div>
    </div>
}

export default Question