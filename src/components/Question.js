import React from 'react';

function onButtonClick(e) {
    e.preventDefault()
    alert("I click an answer");
}

function Answer(props) {
    return <button onClick={onButtonClick} className="buttonAnswer" >{props.label} </button>

}
export default () => {
    return <div className="question">
        <h1 >What is inflation?</h1>
        <div >
            <Answer label="Icecream"></Answer>
            <Answer label="A pie"></Answer>
            <Answer label="I don´t care"></Answer>
            <Answer label="Mama"></Answer>


        </div>
    </div>
}