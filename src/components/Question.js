import React from 'react';
import Answer from './Answer'




function renderAnswer(answer, next) {
    return <Answer label={answer.label} isCorrect={false} key={answer.value} color={answer.color} next={next}></Answer>
}
const Question = (props) => {
    console.log(props.data);

    return <div className="question">
        <h1 > {props.data.text} </h1>
        <div className="answerListContainer">
            <div className="answerRow">
                {renderAnswer(props.data.answers[0], props.next)}
                {renderAnswer(props.data.answers[1], props.next)}

            </div>

            <div className="answerRow">
                {renderAnswer(props.data.answers[2], props.next)}
                {renderAnswer(props.data.answers[3], props.next)}

            </div>
        </div>
    </div>
}

export default Question