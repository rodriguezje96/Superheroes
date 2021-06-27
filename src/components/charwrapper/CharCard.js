import { Link } from "react-router-dom";
import './CharCard.css';
import DeleteChar from './DeleteChar';
import AddChar from './AddChar';
const CharCard = (props) => {
    return (
        <div className="col-8 col-lg-4 mx-auto">
            <div className="CharCard card mx-auto">
            <img className="card-img-top" src={props.character.image.url} alt="Hero Avatar"></img>
            <div className="card-body row">
                <h4 className="card-title col-12">{props.character.name}</h4>
                <p className="card-text col-6">Intelligence</p>
                <p className="card-text col-6">{props.character.powerstats.intelligence}</p>
                <p className="card-text col-6">Strength</p>
                <p className="card-text col-6">{props.character.powerstats.strength}</p>
                <p className="card-text col-6">Speed</p>
                <p className="card-text col-6">{props.character.powerstats.speed}</p>
                <p className="card-text col-6">Durability</p>
                <p className="card-text col-6">{props.character.powerstats.durability}</p>
                <p className="card-text col-6">Power</p>
                <p className="card-text col-6">{props.character.powerstats.power}</p>
                <p className="card-text col-6">Combat</p>
                <p className="card-text col-6">{props.character.powerstats.combat}</p>
                <Link to={{
                    pathname: '/charprofile',
                    state: { charInfo: props.character }
                }} className="btn btn-success col-6">Details</Link>
               {props.delete && <DeleteChar {...props}></DeleteChar>}
               {props.add && <AddChar {...props}></AddChar>} 
            </div>
            </div>
        </div>
    );
}
export default CharCard