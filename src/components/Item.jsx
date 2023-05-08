import React, {useState} from "react";

function Item(props){
  const [isCrossed, setCrossed] = useState(false);
  function handleClick(){
    setCrossed(!isCrossed);
    /* props.onChecked(props.id); */
    
  }
  function handleDelete(){
    props.onDeleted(props.id);

  }
  return (
    <div style={{ display: "flex" }}>
    <li 
      style={{textDecorationLine: isCrossed ? "line-through":"none"}}
      onClick={handleClick}
      >
      {props.value}
    </li>
    

    </div>
    
  );

}

export default Item;