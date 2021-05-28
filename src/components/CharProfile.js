import { Redirect } from "react-router-dom";
import React, { Component } from 'react';
class CharProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            character: this.props.location.state?.charInfo
         }
    }
    render() {
        if (!localStorage.getItem("token")) {
            return <Redirect to="/login" />
        }
        if (!this.state.character) {
            return <Redirect to="/home" />
        }
        console.log(this.props);
        return (
            <div className="row ">
                <div className="col-4">
                    <img className="card-img-top" src={this.state.character?.image.url} alt="Card image"></img>
                </div>
    
                <div className="col-7">
                    <p className="card-text col-6">Weight</p>
                    <p className="card-text col-6">{this.state.character?.appearance.weight}</p>
                    <p className="card-text col-6">height</p>
                    <p className="card-text col-6">{this.state.character?.appearance.height}</p>
                    <p className="card-text col-6">Name</p>
                    <p className="card-text col-6">{this.state.character?.name}</p>
                    <p className="card-text col-6">Alias</p>
                    <p className="card-text col-6">{this.state.character?.biography.aliases}</p>
                    <p className="card-text col-6">Eye color</p>
                    <p className="card-text col-6">{this.state.character?.appearance["eye-color"]}</p>
                    <p className="card-text col-6">Hair Color</p>
                    <p className="card-text col-6">{this.state.character?.appearance["hair-color"]}</p>
                    <p className="card-text col-6">Place of Work</p>
                    <p className="card-text col-6">{this.state.character?.work.base}</p>
                </div>
    
            </div>
        );
    }
}

export default CharProfile;