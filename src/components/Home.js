import CharWrapper from './CharWrapper';
import team from '../mock/team.json'

const Home = () => {
    return (
        <div>
            <SearchBar></SearchBar>
            <Instrucciones></Instrucciones>
            <Stats></Stats>
            <CharWrapper team={team}></CharWrapper>
        </div>

    );
}

export default Home;
const SearchBar = () => {
    return (
        <div className="form-group">
            <label htmlFor="busqueda">Busqueda:</label>
            <input type="text" className="form-control" id="busqueda" name="busqueda"></input>
        </div>
    );
}

const Instrucciones = () => {
    return (
        <div>
            <h2>Instructions</h2>
            <p> Elegí hasta seis personajes Armá el equipo con tres buenos y tres malos. ¡Buscá usando la barra de arriba!</p>
        </div>
    );
}

const Stats = () => {
    return (
        <div>
            <h2>Stats</h2>
            <ul>
                <li>Intelligence: </li>
                <li>Strength: </li>
                <li>Speed: </li>
                <li>Durability: </li>
                <li>Power: </li>
                <li>Combat: </li>
            </ul>
        </div>
    );
}



