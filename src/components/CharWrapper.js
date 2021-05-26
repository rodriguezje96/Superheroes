const CharWrapper = (props) => {
    let chars = props.team.map(function (item){
        return <Character character={item}></Character>;
    });
    return (
        <div className="row"> 
        {chars}
        </div>
    );
}


const Character = (props) => {
    return (
        <div className="card col-6 col-lg-2">
            <img className="card-img-top" src={props.character.image.url} alt="Card image"></img>
            <div className="card-body row">
                <h4 className="card-title col-12">{props.character.name}</h4>
                <p className="card-text col-6">Intelligence</p>
                <p className="card-text col-6">{props.character.powerstats.intelligence}</p>
                <p className="card-text col-6">strength</p>
                <p className="card-text col-6">{props.character.powerstats.strength}</p>
                <p className="card-text col-6">speed</p>
                <p className="card-text col-6">{props.character.powerstats.speed}</p>
                <p className="card-text col-6">durability</p>
                <p className="card-text col-6">{props.character.powerstats.durability}</p>
                <p className="card-text col-6">power</p>
                <p className="card-text col-6">{props.character.powerstats.power}</p>
                <p className="card-text col-6">combat</p>
                <p className="card-text col-6">{props.character.powerstats.combat}</p>
                <a href="#" className="btn btn-success col-6">Details</a>
                <a href="#" className="btn btn-danger col-6">Delete</a>

            </div>
        </div>
    );
}

export default CharWrapper