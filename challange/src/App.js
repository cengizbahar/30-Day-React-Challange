
import Button from "./components/Button";
import { useState, useRef, forwardRef, useReducer } from "react";
import Test from "./components/Test";

import {reducer} from "./reducer/reducer";



/* Komponent İçin kullanılır */
const Input = forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />
})


const initialState = {
  data: "",
  loading: false,
  error: ""
}

function App() {


  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error} = state;
  const fetchDog = () => {
    dispatch({ type: "FETCH_START" });

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.message });
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR", payload: "Error fetching data" })
      })
  };

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

      
      <button onClick={fetchDog} disabled={loading}>Fetch Dog</button>
      {data && (
        <div>
          <img src={data} alt="random dog" />
        </div>
      )}
      {error && <p>{error}</p>}
    </div>

  );
}

export default App;
