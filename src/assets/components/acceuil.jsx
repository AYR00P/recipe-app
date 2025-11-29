import React from "react";
import Navbar from "./Navbar";
import tacosImage from "../image/tacos.jpg"; 
import sushiImage from "../image/sushi.jpeg";
import couscousImage from "../image/couscous.jpeg";       
import pizzaImage from "../image/pizza.jpg"; 
import padthaiImage from "../image/padthai.jpg"; 
import butterchickenImage from "../image/butterchicken.jpg"; 
import boeufImage from "../image/boeufbourguignon.jpg"; 
import churrascoImage from "../image/churrasco.jpg"; 
import poutineImage from "../image/poutine.jpg"; 
import dimsumImage from "../image/dimsum.jpg"; 
import ramenImage from "../image/ramen.jpg";
import paellaImage from "../image/paella.jpg";  
import falafelImage from "../image/falafel.jpg";
import biryaniImage from "../image/biryani.jpg";
import baklavaImage from "../image/baklava.jpg";
import {useState,useEffect} from 'react';
import Card from "./Card";
const recettes = [
        {
            name: "Tacos",
            description: "Délicieux tacos mexicains garnis de viande, légumes et sauce.",
            image: tacosImage,
            ingredients: ["Tortillas", "Viande hachée", "Laitue", "Tomates", "Fromage", "Sauce salsa"],
            preparation: "Faites cuire la viande hachée avec des épices. Garnissez les tortillas avec la viande, les légumes et la sauce. Roulez et servez.",
            histoire: "Originaire du Mexique, les tacos sont un plat emblématique qui remonte à l'époque précolombienne."
        },
        {
            name: "Sushi",
            description: "Rouleaux de riz japonais garnis de poisson cru et légumes.",
            image: sushiImage,
            ingredients: ["Riz à sushi", "Poisson cru (saumon, thon)", "Algues nori", "Avocat", "Concombre", "Vinaigre de riz"],
            preparation: "Préparez le riz à sushi avec du vinaigre. Placez une feuille de nori, ajoutez le riz et les garnitures, puis roulez fermement.",
            histoire: "Le sushi est un plat japonais traditionnel qui a évolué à partir d'une méthode de conservation du poisson."
        },
        {
            name: "Couscous",
            description: "Plat traditionnel nord-africain à base de semoule, légumes et viande.",
            image: couscousImage,
            ingredients: ["Semoule de couscous", "Poulet ou agneau", "Carottes", "Courgettes", "Pois chiches", "Épices (ras el hanout)"],
            preparation: "Faites cuire la viande et les légumes dans un bouillon épicé. Préparez la semoule à la vapeur et servez avec le bouillon.",
            histoire: "Le couscous est un plat emblématique de l'Afrique du Nord, souvent servi lors de grandes occasions."
        },
        {
            name: "Pizza Margherita",
            description: "Pizza italienne classique avec tomate, mozzarella et basilic.",
            image: pizzaImage,
            ingredients: ["Pâte à pizza", "Sauce tomate", "Mozzarella", "Basilic frais", "Huile d'olive"],
            preparation: "Étalez la pâte, ajoutez la sauce tomate, la mozzarella et le basilic. Faites cuire au four jusqu'à ce que la croûte soit dorée.",
            histoire: "Créée en l'honneur de la reine Margherita d'Italie, cette pizza représente les couleurs du drapeau italien."
        },
        {
            name: "Pad Thaï",
            description: "Nouilles sautées thaïlandaises avec crevettes, tofu et cacahuètes.",
            image: padthaiImage,
            ingredients: ["Nouilles de riz", "Crevettes", "Tofu", "Cacahuètes", "Œufs", "Sauce tamarin"],
            preparation: "Faites sauter les nouilles avec les crevettes, le tofu et les œufs. Ajoutez la sauce tamarin et garnissez de cacahuètes.",
            histoire: "Le Pad Thaï est un plat populaire en Thaïlande, introduit comme un symbole de l'identité nationale dans les années 1930."
        },
        {
            name: "Butter Chicken",
            description: "Poulet au beurre indien dans une sauce crémeuse et épicée.",
            image: butterchickenImage,
            ingredients: ["Poulet", "Tomates", "Crème", "Beurre", "Épices (garam masala, curcuma)", "Ail"],
            preparation: "Faites mariner le poulet dans des épices, puis faites-le cuire dans une sauce à base de tomates, crème et beurre.",
            histoire: "Originaire de Delhi, le Butter Chicken a été créé dans les années 1950 pour utiliser les restes de poulet tandoori."
        },
        {
            name: "Boeuf Bourguignon",
            description: "Plat français mijoté avec du boeuf, du vin rouge et des légumes.",
            image: boeufImage,
            ingredients: ["Bœuf", "Vin rouge", "Carottes", "Champignons", "Oignons", "Bouquet garni"],
            preparation: "Faites revenir le bœuf, ajoutez les légumes et le vin rouge. Laissez mijoter lentement jusqu'à tendreté.",
            histoire: "Ce plat traditionnel français vient de la région de Bourgogne, célèbre pour son vin rouge."
        },
        {
            name: "Churrasco",
            description: "Barbecue brésilien avec différentes viandes grillées.",
            image: churrascoImage,
            ingredients: ["Viande de bœuf", "Sel", "Poivre", "Huile d'olive", "Ail"],
            preparation: "Assaisonnez la viande avec du sel et du poivre, puis faites-la griller sur un barbecue jusqu'à cuisson désirée.",
            histoire: "Le Churrasco est une tradition culinaire brésilienne, souvent associée aux fêtes et aux rassemblements familiaux."
        },
        {
            name: "Poutine",
            description: "Plat canadien composé de frites, fromage en grains et sauce brune.",
            image: poutineImage,
            ingredients: ["Pommes de terre", "Fromage en grains", "Sauce brune"],
            preparation: "Faites frire les pommes de terre, ajoutez le fromage en grains et nappez de sauce brune chaude.",
            histoire: "Originaire du Québec, la poutine est devenue un symbole de la cuisine canadienne."
        },
        {
            name: "Dim Sum",
            description: "Petits plats chinois servis dans des paniers vapeur.",
            image: dimsumImage,
            ingredients: ["Pâte à raviolis", "Porc haché", "Crevettes", "Gingembre", "Sauce soja"],
            preparation: "Préparez la farce, remplissez la pâte et faites cuire à la vapeur dans des paniers en bambou.",
            histoire: "Les Dim Sum sont une tradition chinoise, souvent servie avec du thé lors du Yum Cha."
        },
        {
            name: "Ramen",
            description: "Soupe de nouilles japonaises avec bouillon savoureux et garnitures.",
            image: ramenImage,
            ingredients: ["Nouilles ramen", "Bouillon (poulet, porc)", "Viande (chashu)", "Oignons verts", "Oeuf mariné"],
            preparation: "Faites cuire les nouilles, préparez le bouillon et ajoutez les garnitures. Servez chaud.",
            histoire: "Le ramen est un plat japonais d'origine chinoise, devenu emblématique de la culture culinaire japonaise."
        },
        {
            name: "Paella",
            description: "Plat espagnol à base de riz, fruits de mer et légumes.",
            image: paellaImage,
            ingredients: ["Riz", "Crevettes", "Moules", "Poivrons", "Safran", "Bouillon de poisson"],
            preparation: "Faites revenir les légumes, ajoutez le riz et le bouillon. Incorporez les fruits de mer et laissez mijoter.",
            histoire: "Originaire de Valence, la paella est un plat traditionnel espagnol souvent préparé lors de grandes occasions."
        },
        {
            name: "Falafel",
            description: "Boulettes frites à base de pois chiches et épices.",
            image: falafelImage,
            ingredients: ["Pois chiches", "Ail", "Coriandre", "Cumin", "Farine", "Huile pour friture"],
            preparation: "Mixez les pois chiches avec les épices, formez des boulettes et faites-les frire jusqu'à dorées.",
            histoire: "Le falafel est un plat populaire au Moyen-Orient, souvent servi dans des pains pita."
        },
        {
            name: "Biryani",
            description: "Riz épicé indien avec viande et légumes.",
            image: biryaniImage,
            ingredients: ["Riz basmati", "Viande (poulet, agneau)", "Épices (cannelle, cardamome)", "Yaourt", "Oignons"],
            preparation: "Faites mariner la viande avec des épices, faites cuire le riz séparément. Mélangez le tout et laissez mijoter.",
            histoire: "Le biryani est un plat d'origine moghole, devenu populaire dans toute l'Inde et au-delà."
        },
        {
            name: "Baklava",
            description: "Pâtisserie sucrée à base de pâte filo, noix et miel.",
            image: baklavaImage,
            ingredients: ["Pâte filo", "Noix (noisettes, pistaches)", "Beurre", "Miel", "Sucre"],
            preparation: "Alternez les couches de pâte filo avec les noix hachées. Arrosez de miel et faites cuire au four.",
            histoire: "Le baklava est un dessert traditionnel du Moyen-Orient, apprécié pour sa richesse et sa douceur."
        }

    ];
function Acceuil() {
    
    const[recherche, setRecherche] = useState("");
    const[recettesFiltrees, setRecettesFiltrees] = useState(recettes);
    
    function handleSubmit(e){
            e.preventDefault()
        const search = document.getElementById('Search').value.trim().toLowerCase()
        if (search === '') {
            setRecettesFiltrees(recettes);
        } else {
            const filteredRecettes = recettes.filter((recette) =>
                recette.name.toLowerCase().includes(search)
            );
            setRecettesFiltrees(filteredRecettes);
        }
    };
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Bienvenue sur notre site de recettes</h1>
                <p>Découvrez une variété de recettes délicieuses et faciles à préparer.</p>
                <p>Explorez nos recettes et trouvez l'inspiration pour votre prochain repas !</p></div>
            <div className="input-group col w-50 mx-auto mt-3">
                        <input type="text" id='Search' className="form-control" placeholder="Chercher pour une recette..." aria-label="Chercher pour une recette...." aria-describedby="SearchButton"/>
                        <button className="btn btn-outline-primary z-0" type="submit" id="SearchButton" onClick={handleSubmit} >Chercher</button>
            </div>
            <div className="container">
            <div className="row">
                    {recettesFiltrees.map((recette, index) => (
                        <div className="col-md-4" key={index}>
                            <Card
                                recette={recette}
                            />
                            
                        </div>
                    ))}
                </div>  
            </div>
            
        </div>
    );
}

export default Acceuil;
export { recettes };