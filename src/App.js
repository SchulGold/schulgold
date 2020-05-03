import React from 'react';
import './App.css';
import Question from './components/Question';
import questionsData from './data/questionsData';
import Navbar from "./components/Navbar"

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';


import awsconfig from './aws-exports';


import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';



Amplify.configure(awsconfig);


class App extends React.Component {
  async componentDidMount() {
    // Simple query
    const allTodos = await API.graphql(graphqlOperation(queries.listMyTypes));
    console.log(allTodos);
    // Query using a parameter
    // const oneTodo = await API.graphql(graphqlOperation(queries.getTodo, { id: 'some id' }));
    // console.log(oneTodo);
  }

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

    const MyTheme = {
      sectionHeader: { backgroundColor: "red" },

    }

    return (
      <div className="loginContainer">
        <AmplifyAuthenticator style={{
          width: "100%",
        }} username-alias="Email" federated={false} theme={MyTheme}>
          <div className="signInContainer" slot="sign-in"
          >
            <div class="signInBrandContainer">
              <h1 class="headingSignIn">School Gold</h1>
              <p class="descriptionSingIn">The financial literacy plaftorm for the little ones.</p>

            </div>
            <AmplifySignIn usernameAlias="email"
              federated={false}
              headerText=""
              formFields={[{
                type: "email",
                label: "Email",
                placeholder: "student@school.com",
                required: true,
              },
              {
                type: "password",
                label: "Password",
                placeholder: "password",
                required: true,
              }]} >
            </AmplifySignIn>
          </div>


          <div>
            <Navbar></Navbar>
            <Question data={questionsData[this.state.questionNumber]} next={this.nextQuestion} />
          </div>
        </AmplifyAuthenticator>
      </div>

    );
  }
}



export default App;

