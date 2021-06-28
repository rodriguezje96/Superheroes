import CharCard from "./CharCard";
const CharWrapper = (props) => {
    let chars = props.team.map(function (item) {
        return <CharCard character={item} deleteChar={props.deleteChar} {...props} key={item.id}></CharCard>;
    });
    return (
        <div className="row container mx-auto">
            {chars}
        </div>
    );
}



export default CharWrapper