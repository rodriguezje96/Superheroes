import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

export default class SearchBar extends Component {
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
            axios.get("https://superheroapi.com/api.php/1009301669473874/search/" + this.state.search + "/", {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((response) => {
                    this.setState({ results: response.data.results })
                })
                .catch((error) => {
                    alert("Try Again");
                })
        }
    }
    render() {
 
        if (this.state.results.length > 0) {
            return <Redirect to={{
                pathname: '/searchResult',
                state: { results: this.state.results }
            }} />
        }
        return (
            <div className="form-group">
                <nav className="navbar navbar-expand-sm navbar-dark bg-info text-white ">
                    <div className="row mx-auto">
                        <span className="navbar-brand mb-0 h1 col-sm-12">Search your hero!</span> <br></br>
                        <label htmlFor="search"></label>
                        <input type="text" className="form-control col-8 col-md-10" id="search" name="search" placeholder="Type to search" onChange={(event) => this.handleSearch(event)}></input>
                        <button type="button" className="btn btn-dark col-4 col-md-2" onClick={() => this.searchResult()}>Search</button>
                    </div>
                </nav>
            </div>
        );
    }
}