import Circle from "../Atomes/Circle";
import { useState, useEffect } from "react";

export default function BackGround(){

    const [circles, setCircles] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const initialState = {
        
    };

    // au lancement de la page, Circles est vide. 
    // j'initialise Circles avec son initialState
    // chaque fois qu'un cercle est "abattu", je le supprime de Circles et j'en génère un nouveau
    

    useEffect(()=> {
            //useEffects de tous les cercles
    }, [circles]);

    useEffect(()=> {
       // createCircles()//use effect à l'initialisation de la page
    }, [] );
  
    return (
        <div className="BackGround">
           
        </div>
    )

    // function createCircles(){
    //     let x = "";
    //     let tab = [];
    //     for(let i =0;i>5;i++){
    //         x += '<Circle id=i style={style.circle} />'
    //         tab.push(i) 
    //     }
    //     setCircles(tab)
    //     document.querySelector('.BackGround').append(x)
    // }
    
}


//créer un [] avec tous 5 cercles
//
