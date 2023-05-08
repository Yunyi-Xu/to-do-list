import React, {useState} from "react";
import Item from "./Item";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState(["Click to strikethrough", "Click again to un-strikethrough"]);
  function handleChange(event){
    setInputText(event.target.value);
  }
  function handleClick(){
    if (inputText.trim()){
      setToDoList([...toDoList, inputText]);
    }
    setInputText("");

  }
  function handleClearAll(){
    setToDoList([]);
  }
  function handleClear(index){
    deleteItem(index);

  }
  function deleteItem(id) {
    setToDoList(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  
  return (
    <div className="container">
      <div className="heading" style={{ display: "flex" }}> 
        <h1>To-Do List</h1>
        <button onClick={handleClearAll} style={{marginLeft: 'auto'}}>Clear All</button>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((toDoItem, index) => (
            <div    >
              <Item 
              key={index} id={index}
               
                value={toDoItem}
                onDeleted={deleteItem}
                
              />
              

            </div>
            
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
