import CharWrapper from '../charwrapper/CharWrapper';
import team from '../../mock/team.json'
import { Redirect } from "react-router-dom";
import React, { Component } from 'react';
import "./home.css"
import SearchBar from './SearchBar'
import Instructions from './Instructions'
import Stats from './Stats'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: team
        }
        this.deleteToken=this.deleteToken.bind(this)
        this.deleteChar=this.deleteChar.bind(this)

    }

    deleteChar(id) {
        let filterId = this.state.team.filter(function (hero) {
            return hero.id !== id;
        })
        this.setState({ team: filterId })
    }

    deleteToken() {
        localStorage.removeItem("token")
        this.setState({}) 
    }

    getStatsTeam() {
        var stats={
            intelligence: this.state.team.map(function (hero) {
                return parseInt(hero.powerstats.intelligence);
            }),
            strength: this.state.team.map(function (hero) {
                return parseInt(hero.powerstats.strength);
            }),
            speed: this.state.team.map(function (hero) {
                return parseInt(hero.powerstats.speed);
            }),
            durability: this.state.team.map(function (hero) {
                return parseInt(hero.powerstats.durability);
            }),
            power: this.state.team.map(function (hero) {
                return parseInt(hero.powerstats.power);
            }),
            combat: this.state.team.map(function (hero) {
                return parseInt(hero.powerstats.combat);
            }),
        }
        return stats;
    }

    render() {
        if (!localStorage.getItem("token")) {
            return <Redirect to="/login" />
        }
        return (
            <div className="Home">
                <SearchBar></SearchBar>
                <LogoutButton deleteToken={this.deleteToken}></LogoutButton>
                <Instructions></Instructions>
                <Stats stats={this.getStatsTeam()}></Stats>
                <CharWrapper team={this.state.team} deleteChar={this.deleteChar} delete={true}></CharWrapper>
            </div>

        );
    }
}

export default Home;
const LogoutButton = (props) => {
    return <button className="btn btn-danger float-right LogoutButton" onClick={props.deleteToken}>Logout</button>
}



