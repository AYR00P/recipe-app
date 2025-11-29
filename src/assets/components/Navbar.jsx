import { Link } from "react-router-dom";

function Navbar(){
    return(
    <div className="container-fluid w-100" style={{height:'10vh'}}>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark position-fixed w-100 z-2 " style={{left:0}}>
    <div className="container-fluid">
        <a className="navbar-brand" href="#">GastroSphere</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mb-2 mb-lg-0 position-relative w-100 justify-content-center"> 
            <li className="nav-item ">
            <Link to={'/'} className="nav-link active" aria-current="page" >Acceuil</Link>
            </li>
            <li className="nav-item">
            <Link to={'/Faq'} className="nav-link" >FAQ</Link>
            </li>
        </ul>
        <span className="navbar-text">
            <button className="btn btn-success btn-sm" >
                <Link className="nav-link" to={'/Connexion'}>Connexion</Link>
            </button>
        </span>
        </div>
    </div>
    </nav>
    </div>
    )
}
export default Navbar;