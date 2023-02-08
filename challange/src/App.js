
import Button from "./components/Button";
import { useState, useRef, forwardRef, useReducer } from "react";
import Test from "./components/Test";


/* Komponent İçin kullanılır */
const Input = forwardRef((props, ref) =>{
  return <input ref={ref} type="text" {... props} />
})

function App() {
  const todos = ['todo1', 'todo2', 'todo3'];
  const [show, setShow] = useState(false)
  /* Div elemanlarına erişmek için kullanılır */
  const inputRef = useRef()
  const focusInput = () => {
    inputRef.current.focus()
  }


  return (
    <div className="App" >
      <Button text="Buton Örneği" variant="success" />
      <ul >
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
      <button onClick={() => setShow(show => !show)}>
        {show ? 'Gizle' : ' Göster'}
      </button>
      {show && <Test />}
      <Input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
    </div>

  );
}

export default App;
