import CharWrapper from '../charwrapper/CharWrapper';
import { Redirect } from "react-router-dom";
import React, { Component } from 'react';
import { withRouter } from "react-router";
class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: this.props.location.state?.results
        }
    }
    render() {
        if (!localStorage.getItem("token")) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                <h2>Results</h2>
             {this.state.results && <CharWrapper team={this.state.results} add={true} addChar={this.props.addChar}></CharWrapper>}  
             {!this.state.results && <h2>No results found</h2>}  
            </div>
        );
    }
}

export default withRouter(SearchResult);