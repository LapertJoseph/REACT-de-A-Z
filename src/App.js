

function App() {            // Ceci est un composant ( une fonction) 
  return (
    <div className="App">                           {/* On écris className au lieu de class car c'est un mot réservé */}
      <h1>Hello app React</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <input type="text" /> <br />                  {/* pour les inputs il faut les fermer sinon on aura une erreur */}
      {5 + 5} <br />                                {/* on peut directement faire des calcul dans le html */}
      {true ? 1000 : "abc"}                         {/* Rendu conditionel */}
    </div>
  );
}

export default App;       // export de la fonction App qui est retourner dans la div root 
