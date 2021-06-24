const Stats = () => {
    return (
        <div>
            <h2>Stats</h2>
            <table className="table table-bordered table-striped container">
                <tr className="row">
                    <td className="card-text col-3">Intelligence</td>
                    <td className="card-text col-9"></td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Strength</td>
                    <td className="card-text col-9"></td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Speed</td>
                    <td className="card-text col-9"></td>
                </tr>

                <tr className="row">
                    <td className="card-text col-3">Durability</td>
                    <td className="card-text col-9"></td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Power</td>
                    <td className="card-text col-9"></td>
                </tr>
                <tr className="row">
                    <td className="card-text col-3">Combat</td>
                    <td className="card-text col-9"></td>
                </tr>

            </table>
        </div>
    );
}
export default Stats;