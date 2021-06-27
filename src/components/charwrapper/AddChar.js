const AddChar  = (props) => {
    return (
        <button className="btn btn-info col-6" onClick={() => props.addChar(props.character)}>Add</button>

    );
}

export default AddChar;

