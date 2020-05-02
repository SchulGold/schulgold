import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import questionsData from './data/questionsData';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionNumber: 0
    }
    this.nextQuestion = this.nextQuestion.bind(this)
  }
  nextQuestion() {
    this.setState({ questionNumber: this.state.questionNumber + 1 })
  }
  render() {

    return (
      <div className="App">
        <Question data={questionsData[this.state.questionNumber]} next={this.nextQuestion} />

      </div>
    );
  }
}

export default App;
