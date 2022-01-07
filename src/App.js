import Item from './Item'

function App() {                                      // Ceci est un composant ( une fonction) 
  return (
    <div className="App">                           
      <h1>Hello app React</h1>
      <Item />                                        {/* on place Item ici en pensant à bien refermer la balise sinon erreur */}
    </div>
  );
}

export default App;                                   // export de la fonction App qui est retourner dans la div root 
