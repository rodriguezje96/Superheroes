function Login() {
    return (

        <form>
          <div className="form-group">
            <label htmlFor="usr">Name:</label>
            <input type="text" className="form-control" id="usr" name="username"></input>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" name="password"></input>
          </div>
          <button type="button" class="btn btn-success">Submit</button>
        </form>
    );
  }

  export default Login;
