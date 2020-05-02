import React from 'react';
import Answer from './Answer'




function renderAnswer(answer) {
    return <Answer label={answer.label} isCorrect={false} key={answer.value} color={'magenta'}></Answer>
}
const Question = (props) => {
    console.log(props.data);
    const answerList = props.data.answers.map(
        renderAnswer

    );
    return <div className="question">
        <h1 > {props.data.text} </h1>
        <div >
            {answerList}
        </div>
    </div>
}

export default Question