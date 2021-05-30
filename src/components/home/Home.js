import CharWrapper from '../charwrapper/CharWrapper';
import team from '../../mock/team.json'
import { Redirect } from "react-router-dom";
import React, { Component } from 'react';
import axios from 'axios';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: team
        }
    }
    deleteChar(id) {
        let filterId = this.state.team.filter(function (hero) {
            return hero.id !== id;
        })
        this.setState({ team: filterId })
    }

    render() {
        if (!localStorage.getItem("token")) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                <SearchBar></SearchBar>
                <LogoutButton></LogoutButton>
                <Instrucciones></Instrucciones>
                <Stats></Stats>
                <CharWrapper team={this.state.team} deleteChar={this.deleteChar.bind(this)}></CharWrapper>
            </div>

        );
    }
}

export default Home;
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            results: []
        }
    }
    handleSearch(event) {
        this.setState({ search: event.target.value })
    }

    searchResult() {
        if (this.state.search !== "") {
            axios.get("https://superheroapi.com/api/1009301669473874/search/" + this.state.search)
                .then((response) => {
                    this.setState({ results: response.data.results })

                })
                .catch((error) => {
                    alert("Try Again");
                })
        }
    }
    render() {
        return (
            <div className="form-group">
                <nav className="navbar navbar-expand-md navbar-dark bg-info text-white">
                    <span class="navbar-brand mb-0 h1">Search your hero!</span>
                    <label htmlFor="search"></label>
                    <input type="text" className="form-control" id="search" name="search" placeholder="Type to search" onChange={(event) => this.handleSearch(event)}></input>
                    <button type="button" class="btn btn-dark" onClick={() => this.searchResult()}>Search</button>
                </nav>
            </div>
        );
    }
}

const Instrucciones = () => {
    return (
        <div>
            <h2>Instructions</h2>
            <p> You can choose six characters! Create your team of three good guys and three bad guys.</p>
        </div>
    );
}

const Stats = () => {
    return (
        <div>
            <h2>Stats</h2>
            <table className="table table-bordered table-striped">
                <tr className="row">
                    <td className="card-text col-3">Intelligence</td>
                    <td className="card-text col-9"></td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Strength</td>
                    <td className="card-text col-9"></td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Speed</td>
                    <td className="card-text col-9"></td>
                </tr>

                <tr className="row">
                    <td className="card-text col-3">Durability</td>
                    <td className="card-text col-9"></td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Power</td>
                    <td className="card-text col-9"></td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Combat</td>
                    <td className="card-text col-9"></td>
                </tr>

            </table>
        </div>
    );
}
const LogoutButton = () => {
    return <button className="btn btn-danger" onClick={() =>{
        localStorage.removeItem("token")
    }}>Logout</button>
}



