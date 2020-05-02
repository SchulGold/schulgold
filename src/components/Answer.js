import React from 'react'


function onButtonClick(e) {
    e.preventDefault()
    alert("I click an answer");
}

class Answer extends React.Component {
    render() {
        const color = this.props.color
        return <div className="answerWrapper">
            <button onClick={onButtonClick} className="buttonAnswer" style={{ backgroundColor: color, borderColor: color }}>{this.props.label} </button>
        </div>
    }
}

export default Answer 