import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import New from "./components/New"
import User from "./components/User"
import Login from "./components/Login"
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      isLoggedIn: false,
      loggedInName: ""
    })
    this.updateLoggedInName = this.updateLoggedInName.bind(this)
    this.logout = this.logout.bind(this)
  }

  updateLoggedInName(e){
    this.setState({
      isLoggedIn: true,
      loggedInName: e
    })
  }

  logout(){
    this.setState({isLoggedIn: false})
  }

  render() {

    const { isLoggedIn, loggedInName } = this.state

    return (
      <div className="App">
      <Navbar isLoggedIn={isLoggedIn} loggedInName={loggedInName} logout={this.logout} />
        <Switch>
          <Route exact path="/landing">
            {isLoggedIn && <Landing />}
          </Route>
          <Route exact path="/new">
            {isLoggedIn && <New />}
          </Route>
          <Route exact path="/login">
            <Login updateLoggedInName={this.updateLoggedInName}/>
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
