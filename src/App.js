import {useState} from 'react'
import Item from './Item'

function App() {                                      // Ceci est un composant ( une fonction) 

  // console.log(useState(10));                          // quand on passe un argument a la méthode useState() ca va être la donnée de départ (tableau indice 0)

  const [monState, setMonState] = useState(10)          // syntaxe d'une utilisation d'un useState qui retourne un tableau  (State de départ qui est retourner , fonction qui modifie le state)

  console.log(monState);
  console.log(setMonState);

  return (
    <div className="App">                           
      <h1>Hello app React</h1>
      <Item />                                        {/* on place Item ici en pensant à bien refermer la balise sinon erreur */}
    </div>
  );
}

export default App;                                   // export de la fonction App qui est retourner dans la div root 
