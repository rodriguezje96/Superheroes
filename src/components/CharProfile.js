const CharProfile = (props) => {
    return ( 
        <div className="row ">
            <div className="col-4">
            <img className="card-img-top" src={props.character?.image.url} alt="Card image"></img>
            </div>

            <div className="col-7">
                <p className="card-text col-6">Weight</p>
                <p className="card-text col-6">{props.character?.appearance.weight}</p> 
                <p className="card-text col-6">height</p>
                <p className="card-text col-6">{props.character?.appearance.height}</p>
                <p className="card-text col-6">Name</p>
                <p className="card-text col-6">{props.character?.name}</p> 
                <p className="card-text col-6">Alias</p>
                <p className="card-text col-6">{props.character?.biography.aliases}</p>
                <p className="card-text col-6">Eye color</p>
                <p className="card-text col-6">{props.character?.appearance["eye-color"]}</p> 
                <p className="card-text col-6">Hair Color</p>
                <p className="card-text col-6">{props.character?.appearance["hair-color"]}</p> 
                <p className="card-text col-6">Place of Work</p>
                <p className="card-text col-6">{props.character?.work.base}</p> 
            </div>

        </div>
     );
}
 
export default CharProfile;