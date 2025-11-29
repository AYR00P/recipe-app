import Navbar from "./Navbar";
import { Link } from "react-router-dom";


function Connexion() {
  return (
    <div>
      <Navbar/>
      <form className="container mt-5">
        <h1>Log In</h1>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <div className="input-group">
            <input type={'password'} className="form-control" id="inputPassword3" />
            <button
              type="button"
              className="btn btn-outline-secondary"
            >
             Connexion
            </button>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1"/>
              <label className="form-check-label" htmlFor="gridCheck1">
                Remember me
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form><br/>
      
    </div>
  );
}
export default Connexion;