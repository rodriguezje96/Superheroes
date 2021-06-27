const Stats = (props) => {
    var reducer = (acumulator, actual) => {
        return acumulator + actual;
    };
    return (
        <div>
            <h2>Stats</h2>
            <table className="table table-bordered table-striped container">
                <tr className="row">
                    <td className="card-text col-3">Intelligence</td>
                    <td className="card-text col-9">{props.stats.intelligence.reduce(reducer)}</td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Strength</td>
                    <td className="card-text col-9">{props.stats.strength.reduce(reducer)}</td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Speed</td>
                    <td className="card-text col-9">{props.stats.speed.reduce(reducer)}</td>
                </tr>

                <tr className="row">
                    <td className="card-text col-3">Durability</td>
                    <td className="card-text col-9">{props.stats.durability.reduce(reducer)}</td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Power</td>
                    <td className="card-text col-9">{props.stats.power.reduce(reducer)}</td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Combat</td>
                    <td className="card-text col-9">{props.stats.combat.reduce(reducer)}</td>
                </tr>

            </table>
        </div>
    );
}
export default Stats;