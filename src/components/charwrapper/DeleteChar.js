const DeleteChar  = (props) => {
    return (
        <button className="btn btn-danger col-6" onClick={() => props.deleteChar(props.character.id)}>Delete</button>

    );
}

export default DeleteChar;

