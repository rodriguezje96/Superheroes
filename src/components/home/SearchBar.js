import React, { Component } from 'react';
import axios from 'axios';


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
            axios.get("https://superheroapi.com/api/1009301669473874/search/" + this.state.search, {headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
            }})
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
                <nav className="navbar navbar-expand-sm navbar-dark bg-info text-white ">
                    <div className="row mx-auto">
                    <span class="navbar-brand mb-0 h1 col-sm-12">Search your hero!</span> <br></br>
                    <label htmlFor="search"></label>
                    <input type="text" className="form-control col-8 col-md-10" id="search" name="search" placeholder="Type to search" onChange={(event) => this.handleSearch(event)}></input>
                    <button type="button" class="btn btn-dark col-4 col-md-2" onClick={() => this.searchResult()}>Search</button>
                </div>
                </nav>
            </div>
        );
    }
}