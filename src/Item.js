function Item (props) {
    console.log(props);                         // props renvoi un objet et il va contenir ce qu'un parent lui donne

    // return <h1>{props.txt}</h1>         // props.txt renvoi le string passer dans app car app est son parent
    return <h1>{props.number}</h1>      // props.number renvoi le state passer dans app car app est son parent
                                        
    
}

export default Item;

// "Composant Stateless" car il ne fournit qu'une présentation (il sert seulement a retourner un h1)
// "Composant State" qui vont avoir des données

// seconde régle de rerender si on passe une props, le composant va se mettre a jour également.
// exemple avec props.txt et props.number 

// le premier renvois un texte et le second renvois un nombre sachant que tous les deux vont rerender le composant car le parent se rerender
