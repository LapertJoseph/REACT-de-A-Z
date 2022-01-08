import {useState} from 'react'
import Item from './Item'
function App() {                                      // Ceci est un composant ( une fonction) 

  // console.log(useState(10));                          // quand on passe un argument a la méthode useState() ca va être la donnée de départ (tableau indice 0)

  const [monState, setMonState] = useState(10);          // syntaxe d'une utilisation d'un useState qui retourne un tableau  (State de départ qui est retourner , fonction qui modifie le state)

  const modifyState =  () => {
    setMonState(20)
  }

  return (
    <div className="App">                           
      <h1>Hello State : {monState}</h1>                       {/* <= donnée du composant App (valeur de base dans le useState) */}
                                               
      <button onClick={modifyState}>Change State</button>
      {/* <Item txt="Hello World"/>                           {/* On utilise un composant mais on peut lui attribuer différent props */}
      {/* <Item txt="Hello Italy"/> */}
      {/* <Item txt="Hello Japan"/> */}
      <Item number={monState}/>                            {/* on peut aussi afficher la valeur du state de App */}
    </div>
  );
}

export default App;                                              // export de la fonction App qui est retourner dans la div root 
