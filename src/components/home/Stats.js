const Stats = (props) => {
    var reducer = (acumulator, actual) => {
        return acumulator + actual;
    };
    return (
        <div>
            <h2>Stats</h2>
            <table className="table table-striped container mx-auto table-dark table-sm">
                <tbody>
                    <tr className="row">
                        <td className="card-text col-3">Intelligence</td>
                        <td className="card-text col-9">{props.stats.intelligence.reduce(reducer, 0)}</td>
                    </tr>
                    <tr className="row">
                        <td className="card-text col-3">Strength</td>
                        <td className="card-text col-9">{props.stats.strength.reduce(reducer, 0)}</td>
                    </tr>
                    <tr className="row">
                        <td className="card-text col-3">Speed</td>
                        <td className="card-text col-9">{props.stats.speed.reduce(reducer, 0)}</td>
                    </tr>

                    <tr className="row">
                        <td className="card-text col-3">Durability</td>
                        <td className="card-text col-9">{props.stats.durability.reduce(reducer, 0)}</td>
                    </tr>
                    <tr className="row">
                        <td className="card-text col-3">Power</td>
                        <td className="card-text col-9">{props.stats.power.reduce(reducer, 0)}</td>
                    </tr>
                    <tr className="row">
                        <td className="card-text col-3">Combat</td>
                        <td className="card-text col-9">{props.stats.combat.reduce(reducer, 0)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Stats;