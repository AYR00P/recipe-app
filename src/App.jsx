import Acceuil, {recettes} from './assets/components/acceuil';
import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Faq from './assets/components/Faq';
import Connexion from './assets/components/Connexion';
import Recette from './assets/components/Recette';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acceuil/>}/>
        <Route path='/Faq' element={<Faq/>}/>
        <Route path='/Connexion' element={<Connexion/>}/>
        {recettes.map((recette)=>(
          <Route path={`/Recette/${recette.name}`} element={<Recette recette={recette}/>}/>
        ))}
        <Route path='/*' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
    
}

export default App
