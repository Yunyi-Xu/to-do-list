import React, {useState} from "react";

function Item(props){
  const [isCrossed, setCrossed] = useState(false);
  function handleClick(){
    setCrossed(!isCrossed);
    /* props.onChecked(props.id); */
    
  }
  return (
    <li 
      style={{textDecorationLine: isCrossed ? "line-through":"none"}}
      onClick={handleClick}
      >
      {props.value}
    </li>
  );

}

export default Item;