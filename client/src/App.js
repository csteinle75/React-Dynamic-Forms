import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import axios from 'axios'

//components
import Forms from './Forms'
import AddForm from './AddForm'

class App extends Component {
  state = {
    fields: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {
      this.setState({
        fields: resp.data
      })
    })
  }

  render() {
    return (
      <Router>
        <div>Nav
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addform">Add Form</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" render={() => <Forms fields={this.state.fields} />} /> 
            <Route path="/addform" component={AddForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
