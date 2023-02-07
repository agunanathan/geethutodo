import React, {useState} from 'react'
import Modal from '../components/Modal'


const TodoForm = () => {

  const[todo, setTodo] = useState("");
  const[todos, setTodos] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const[editId, setEditId] = useState(0);

  const handleEdit = (selectedTodoId) => {
    setModalVisible(true);
    const selectedTodoObject = todos.find((item) => item.id === selectedTodoId);
    setTodo(selectedTodoObject.todo);
    setEditId(selectedTodoId);
  }
  const handleUpdate = (e) =>{
    
    e.preventDefault();  
     
      const updatedTodos = todos.map((item)=>item.id===editId ? {id: todo.id, todo} :item);
      /* {

        if(item.id === editId){// Found the object to be edited from the array
          return({id: todo.id, todo}); // Setting the new value to todo - todo:todo
        }else{// rest of all the objects in the array
          return item;// returning the existing object from todos array
        } 
      })*/
        

        setTodos(updatedTodos);
        setEditId(0);
        setTodo("");
        setModalVisible(false);
    
  }
  const handleAdd = (e) => {
    
    e.preventDefault();

    // Adding a new Todo
    if (todo !== "") {
      setTodos([{id: `todo-${Date.now()}` , todo }, ...todos]) //date.now will produces unique number by give current time in millisecond
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos ([...delTodo]);
  };
  
  return (
    <div><h1>My Todo List </h1>
    <form className= "todoForm" onSubmit={handleAdd}>
       <input type= "text" placeholder='Enter your todo'  value={todo} onChange={(e) => setTodo(e.target.value)} />
       
       <button type= "submit"> {false? "Edit" : "Add"}</button>
     </form>
     <ul className= "allToDo"> 
      {
        todos.map((item) => (
        <li className = "singleToDo"> 
        <span className= "toDoText" key={item.id}>{item.todo} </span>
        <button onClick={() => handleEdit(item.id)}> Edit</button>
        <button onClick={() => handleDelete(item.id)}> Delete</button>
        </li>
        ))
      }
     </ul>
     {isModalVisible && 
     <Modal> 
         <form className= "todoForm" onSubmit={handleUpdate}>
       <input type= "text" placeholder='Enter your todo'  value={todo} onChange={(e) => setTodo(e.target.value)} />
       
       <button type= "submit"> Update</button>
       <button type= "button" onClick={()=>setModalVisible(false)}> Cancel</button>
     </form>
       </Modal>
     }
     
     </div>
  )
}

export default TodoForm
