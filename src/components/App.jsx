import React, {useState} from "react";
import Item from "./Item";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState(["Click me to strikethrough; click again to delete :D"]);
  function handleChange(event){
    setInputText(event.target.value);
  }
  function handleClick(){
    setToDoList([...toDoList, inputText]);
    setInputText("");

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
      <div className="heading">
        <h1>To-Do List</h1>
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
            <Item 
              key={index}
              id={index}
              value={toDoItem}
              onChecked={deleteItem}
            />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
