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

        return (
            <div className="row ">
                <div className="col-3">
                    <img className="card-img-top img-thumbnail" src={this.state.character?.image.url} alt="Hero Avatar"></img>
                </div>

                <div className="col-9">
                    <table className="table table-bordered table-striped">
                        <tr className="row">
                            <th className="card-text col-3">Name</th>
                            <th className="card-text col-9">{this.state.character?.name}</th>
                        </tr>
                        <tr className="row">
                            <td className="card-text col-3">Weight</td>
                            <td className="card-text col-9">{this.state.character?.appearance.weight}</td>
                        </tr>
                        <tr className="row">
                            <td className="card-text col-3">height</td>
                            <td className="card-text col-9">{this.state.character?.appearance.height}</td>
                        </tr>

                        <tr className="row">
                            <td className="card-text col-3">Alias</td>
                            <td className="card-text col-9">{this.state.character?.biography.aliases}</td>
                        </tr>
                        <tr className="row">
                            <td className="card-text col-3">Eye color</td>
                            <td className="card-text col-9">{this.state.character?.appearance["eye-color"]}</td>
                        </tr>
                        <tr className="row">
                            <td className="card-text col-3">Hair Color</td>
                            <td className="card-text col-9">{this.state.character?.appearance["hair-color"]}</td>
                        </tr>
                        <tr className="row">
                            <td className="card-text col-3">Place of Work</td>
                            <td className="card-text col-9">{this.state.character?.work.base}</td>
                        </tr>

                    </table>
                </div>

            </div>
        );
    }
}

export default CharProfile;