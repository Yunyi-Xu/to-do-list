import React, {useState} from "react";

function Item(props){
  const [isCrossed, setCrossed] = useState(false);
  function handleClick(){
    console.log(props.id);
    if (!isCrossed){
      setCrossed(true);
      
    }
    else{
      setCrossed(false);
      props.onChecked(props.id);
    }
    
  }
  return (
    <li 
      onClick={handleClick}
      style={{textDecorationLine: isCrossed ? "line-through":"none"}}>
      {props.value}
    </li>
  );

}

export default Item;