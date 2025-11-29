import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
    return(
        <div className="card mt-3 mb-3" >
            <img src={props.recette.image} className="card-img-top" alt="..." style={{height:'40vh'}}/>
            <div className="card-body">
                <h5 className="card-title">{props.recette.name}</h5>
                <p className="card-text" style={{height:'8vh'}}>{props.recette.description}</p>
                <Link to={`/Recette/${props.recette.name}`} className="btn btn-primary">A propos</Link>
            </div>
        </div>
    );
}
export default Card;