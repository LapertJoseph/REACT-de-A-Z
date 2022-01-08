import {useState} from 'react'                  // import qui permet d'utiliser une méthode React ici useState

function Item (props) {

    const [itemState, setItemState] = useState('Item State !')

    // console.log(props);                         
    return ( 
        <div>
        <h1>{props.func}</h1>                                                   {/* props.func fais référence a la fonction modifyState */}
        <button onClick={() => props.func(itemState)}>Change state</button>
        </div>
    )              
}

export default Item;

// "Composant Stateless" car il ne fournit qu'une présentation (il sert seulement a retourner un h1)
// "Composant State" qui vont avoir des données

// seconde régle de rerender si on passe une props, le composant va se mettre a jour également.
// exemple avec props.txt et props.number 

// le premier renvois un texte et le second renvois un nombre sachant que tous les deux vont rerender le composant car le parent se rerender
