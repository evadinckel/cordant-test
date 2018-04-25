import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[],
    }
  }


componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response)=>Response.json())
    .then((findresponse)=>
  {
    this.setState({
      data:findresponse.users,
    })
  })
}
  render()
  {
      return(
          <div>
              {
                this.state.data.map((dynamicData,key) =>
                <div>
                  <span>{dynamicData.name}</span>
                </div>
              )}
            </div>
            )
  }
}



export default App;
