# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



 // the below code is going to bind whatever input variable with this input field and onChange event handler will store any charecters that are typed in and will set the value of the input state variable in setIput eg: if we type "read me" the value for input will be "read me" 
    return (
    <div>
      <h1>Todo List</h1>
      <input 
      type= "text"
      value={input}
      onChange={(e) => setInput(e.target.value)} /> 

 const deleteTodo = (id) => {
      //filter todo with the id
      const newList = list.filter((todo) => todo.id !== id); //list.filter will check each todo and if todo id is not equal to the id of the todo we want to remove it will add that todo to this newlist 
      setList(newList);
    };

    // This is the functioon for adding todo's it will take in the (todo) and then create a variable called newTodo which is a json object. This new todo will have an id which used to identify the todo. The id will be just a randon numbers 
    const addTodo = (todo) => {
      const newTodo = {
        id: Math.random(),
        todo: todo,};

      setList([...list, newTodo]);
      setInput("");
    };

setList([...list, newTodo]); this will add todo to the list
setInput(""); this will use to clear the input box

 <button onClick = {() => addTodo(input)}>Add</button> this will create an onclick event will listen to any clicking event happening on the button and for evry click event it will call addTodo function and will pass in the input which we enter to the input box.

 const App = () => {
    const [color, setColor] = useState("Blue");
    return (<div> <input placeholder = "Enter you text" onChange= {(e) => setColor(e.target.value)}/>{color}</div>);
    
}; 


1.  import React, {useState} from 'react' - The component uses the useState hook to manage the state of the application.
 
2. const[todo, setTodo] = useState(""); - todo: a string value that holds the current value of the input field.
  const[todos, setTodos] = useState([]); - todos: an array of objects, each object represents a todo item and has two properties id and todo.
  const [isModalVisible, setModalVisible] = useState(false); - isModalVisible: a boolean value that determines if the modal should be displayed.
  const[editId, setEditId] = useState(0); - editId: a string that holds the id of the todo item that is currently being edited.

3. const handleEdit = (selectedTodoId) => {
    setModalVisible(true);
    const selectedTodoObject = todos.find((item) => item.id === selectedTodoId);
    setTodo(selectedTodoObject.todo);
    setEditId(selectedTodoId);
  }
  

This defines two functions related to editing a todo item in a todo list: handleEdit and handleUpdate.

The handleEdit function is called when the user wants to edit an existing todo item. It does the following:

sets the modal to visible using setModalVisible(true)
finds the todo item that the user wants to edit using todos.find((item) => item.id === selectedTodoId)
sets the value of the input field in the modal to the content of the selected todo item using setTodo(selectedTodoObject.todo)
sets the ID of the selected todo item using setEditId(selectedTodoId)
The handleUpdate function is called when the user submits the update form in the modal. 

4. const handleUpdate = (e) =>{
    
    e.preventDefault();  
     
      const updatedTodos = todos.map((item)=>item.id===editId ? {id: todo.id, todo} :item);
        setTodos(updatedTodos);
        setEditId(0);
        setTodo("");
        setModalVisible(false);
    
  } 
    4.1. First, the e.preventDefault() line is used to prevent the default behavior of the form when the user 
         submits it (i.e., reloading the page).
    4.2. Then, the const updatedTodos = todos.map((item)=>item.id===editId ? {id: todo.id, todo} :item) line maps 
         through the todos array, and for each todo item, it checks if the id of the item is equal to the editId.   
    4.3. If the id of the item is equal to the editId, it returns a new object with the properties id and todo set 
         to the current todo and todo.id. This is the updated todo that will replace the old todo in the todos 
         array.
    4.4. If the id of the item is not equal to the editId, it returns the original item as is.
    4.5. After the map function, the setTodos(updatedTodos) line sets the state of todos to the updated todos.
    4.6. The setEditId(0) line resets the editId to 0, indicating that no todo item is currently being edited.
    4.7. The setTodo("") line resets the todo input value to an empty string.
         Finally, the setModalVisible(false) line closes the modal.

5. const handleAdd = (e) => {
    
    e.preventDefault();

    // Adding a new Todo
    if (todo !== "") {
      setTodos([{id: `todo-${Date.now()}` , todo }, ...todos])
      setTodo("");
    }
  };

The handleAdd function is a React event handler for handling the submission of a new todo item. The function is triggered when the form is submitted using onSubmit in the component.

   5.1. The e.preventDefault() line is called to prevent the default behavior of the form submission, which is to 
        refresh the page.
   5.2. A conditional statement checks if the value of the todo state is not equal to an empty string. This check is 
        to make sure the user has entered some text before submitting the form.
   5.3. If the above check passes, the setTodos state hook is called to update the todos state with the new todo 
        item. The setTodos function takes an array of todo items as an argument and updates the state with it. In 
        this case, the new todo item is added to the beginning of the todos array using the spread operator (...) 
          [{... spread operator is used to expand an array or object into its individual elements or properties. It 
          can be used in different scenarios, such as merging objects, spreading props in a component, or adding new 
          elements to an array. For example, setTodos([{id: todo-${Date.now()} , todo }, ...todos]) is using the 
          spread operator to add a new object to the todos array, with the properties id and todo.}] 
        and the new item is created using an object literal with two properties: id and todo. id is a unique 
        identifier for each todo item, generated using the Date.now() method, which returns the current time in 
        milliseconds. todo is the value entered by the user.
   5.4. Finally, the setTodo state hook is called to reset the todo state to an empty string. This is done so that 
        the input field is cleared after a new todo item is added.

6.   const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos ([...delTodo]);
  };

The function takes a parameter id and performs the following actions:

  6.1. It filters the todos array, creating a new array delTodo that contains only the elements from todos whose id 
       property does not match the id parameter.
  6.2.Then, it updates the state of the component using setTodos by spreading the delTodo array as its argument. 
      This will set the todos state to the filtered delTodo array, effectively removing the Todo item with the 
      specified id.

7. return (
    <div><h1>My Todo List </h1>
    <form className= "todoForm" onSubmit={handleAdd}>
       <input type= "text" placeholder='Enter your todo'  value={todo} onChange={(e) => setTodo(e.target.value)} />
       
       <button type= "submit"> {false? "Edit" : "Add"}</button>
     </form> 

 This component renders a form for adding a new todo item to a todo list. 
 The form contains an input field for the user to enter their todo item and a submit button. 
 The input field is controlled by the value prop, which is set to the value of the todo state variable. 
 When the user types in the input field, the onChange prop updates the value of the todo state variable with the new input value. The form has an onSubmit prop that is set to the handleAdd function, which will be called when the form is submitted. The submit button has a label that displays "Add" and it is not controlled by any state. 

8.  <ul className= "allToDo"> 
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

This component maps over an array of todos, which is stored in the state todos, and returns a list item for each todo in the form of <li> elements. The content of each list item is the todo text and two buttons, one for editing and one for deleting the todo. The handleEdit function is called when the user clicks the "Edit" button, passing the id of the todo as a parameter. The handleDelete function is called when the user clicks the "Delete" button, passing the id of the todo to be deleted as a parameter. The key prop is used to ensure that each list item is given a unique key, which is required in React for performance reasons.  

9.  {isModalVisible && 
     <Modal> 
         <form className= "todoForm" onSubmit={handleUpdate}>
       <input type= "text" placeholder='Enter your todo'  value={todo} onChange={(e) => setTodo(e.target.value)} />
       
       <button type= "submit"> Update</button>
       <button type= "button" onClick={()=>setModalVisible(false)}> Cancel</button>
     </form>
       </Modal>
     }

This component that creates a Todo list. It has a form to add or edit todos and a list of todos that display on the screen. The code makes use of the Modal component for editing the todo items.

The isModalVisible state variable is a boolean that determines whether the modal should be displayed or not. If isModalVisible is true, the modal is displayed on the screen, otherwise, it is not shown.

The form inside the modal is used for updating a todo item. When the user submits the form, the handleUpdate function is triggered, which updates the selected todo item in the todos list. The input field in the form is connected to the todo state variable, so that the user can change its value. The form has two buttons: Update and Cancel. The Update button updates the todo item and the Cancel button closes the modal.

The modal is displayed using the following line of code:

javascript
Copy code
{isModalVisible && <Modal>...</Modal>}
This line uses the conditional rendering feature in React to conditionally render the Modal component based on the value of isModalVisible. If isModalVisible is true, the modal will be displayed, otherwise, it won't.


10. modal.js import React from "react";

const Modal = ({ children }) => {
  return (<div className='modal'>
      <div className='modal-content'>
          {children}
      </div>
  </div>)
}

export default Modal

this component defines a modal component that takes in children as its content, and renders a modal box with that content inside. The children prop refers to the content that is passed between the opening and closing tags of the component. Modal component, the children prop is passed to the modal-content component, allowing it to be rendered within the modal.





Identify the components: Start by identifying the components that you need to create the Todo app. You will need a component to display the Todos, a component to add new Todos, a component to edit Todos, a component to delete Todos, etc.

Define the state: Define the state for the Todo app, which will keep track of the Todos, the Todo text to be added, and the Todo to be edited. You can use the useState hook to define the state.

Create the components: Create the components that you identified in step 1. Make sure to pass the state variables and the functions that handle the CRUD operations to these components as props.

Display the Todos: Display the Todos using the Todo component. Loop through the Todos in the state using the map function and render each Todo as a separate item.

Add new Todos: Add new Todos using the form component. Implement the handleAdd function that will update the state with the new Todo.

Edit Todos: Implement the handleEdit function that will update the Todo text in the state. You can use a modal to edit the Todo text.

Delete Todos: Implement the handleDelete function that will delete the Todo from the state.

Test the components: Test the components separately to make sure that each component works as expected.

Integrate the components: Finally, integrate all the components to complete the Todo app. Test the complete app to make sure that all the components work together as expected.