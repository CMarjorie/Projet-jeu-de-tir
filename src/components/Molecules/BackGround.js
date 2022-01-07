import Circle from "../Atomes/Circle";

export default function BackGround(){
      
    return (
        <div className="BackGround" style={{top:window.innerHeight*0.25,left:window.innerWidth*0.25}}> 
           <Circle />
           <Circle />
           <Circle />
           <Circle />
           <Circle />
        </div>
    )

   
    
}


