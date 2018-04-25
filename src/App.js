import React, { Component } from 'react';
import './App.css';

const API = 'https://jsonplaceholder.typicode.com/users';
const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users:[],
      isLoading: false,
      error: null,
    };
  }

componentDidMount() {
  this.setState({ isLoading: true });

  fetch(API + DEFAULT_QUERY)
  .then(response => {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error('Oops! Something went wrong!');
    }
  })
  .then(data => this.setState(({ users: data.users, isLoading: false }))
  .catch(error => this.setState({ error, isLoading: false }));
}


  render() {
    const { users, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        {users.map(user =>
          <div key={user.objectID}</div>
          <a href={user.url}>{user.title}</a>
        </div>
      )}
      </div>
    );
  }
}

export default App;
