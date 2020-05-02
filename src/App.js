import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import questionsData from './data/questionsData';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';



import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

class App extends React.Component {
  async componentDidMount() {
    // Simple query
    const allTodos = await API.graphql(graphqlOperation(queries.listMyTypes));
    console.log(allTodos);
  }


  // Query using a parameter
  // const oneTodo = await API.graphql(graphqlOperation(queries.getTodo, { id: 'some id' }));
  // console.log(oneTodo);
  render() {
    return (
      <div className="App" >
        <Question data={questionsData} />
        <AmplifySignOut />
      </div>
    );
  }
}

export default withAuthenticator(App);
