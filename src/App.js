import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home';
import SearchResult from './components/searchresults/SearchResult'
import CharProfile from './components//charprofile/CharProfile'
import { HashRouter, Route } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import React, { Component } from 'react';
import team from './mock/team.json'

class App extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem("team") == undefined) {
      localStorage.setItem("team", JSON.stringify([]))
    }
    this.state = {
      team: JSON.parse(localStorage.getItem("team"))
    }
    this.deleteChar = this.deleteChar.bind(this)
    this.addChar = this.addChar.bind(this)

  }
  deleteChar(id) {
    let filterId = this.state.team.filter(function (hero) {
      return hero.id !== id;
    })
    this.setState({ team: filterId })
    localStorage.setItem("team", JSON.stringify(this.state.team))
  }
  addChar(hero) {
    var team = this.state.team;
    team.push(hero)
    this.setState({ team: team})
    localStorage.setItem("team", JSON.stringify(this.state.team))
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header></Header>
          <Route path={["/login"]} component={() => <Login />} />
          <Route exact path={["/home", "/"]} component={() => <Home team={this.state.team} deleteChar={this.deleteChar}/>} />
          <Route path={["/charProfile"]} component={CharProfile} />
          <Route exact path={["/searchResult"]} render={() => <SearchResult addChar={this.addChar}/>}/>
          <Footer></Footer>

        </div>
      </HashRouter>
    );
  }
}

export default App;
