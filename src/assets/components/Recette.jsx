import Navbar from "./Navbar";


function Recette(props) {
    return (
        <div>
            <Navbar />
            <div className="card mt-5 container recette">
                <img src={props.recette.image} className="card-img-top" alt="" />
                <div>
                    <h2>{props.recette.name}</h2>
                    <p>Voici une recette de cuisine simple et délicieuse :</p>
                    
                    <h3>Ingrédients :</h3>
                    <ul>
                        {props.recette.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    
                    <h3>Instructions :</h3>
                    <ol>
                        {props.recette.preparation.split('. ').map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                     <h3>Histoire :</h3>
                    <p>{props.recette.histoire}</p>
                </div>
            </div>
        </div>
         );
}

export default Recette;