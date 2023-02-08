# 30 Day React Challange
# Install 
https://nodejs.org/en/
## npx create-react-app challange
## npm install -g npx
## npm run build
## "build": "GENERATE_SOURCEMAP=false react-scripts build", Source code none.  
## npm i sass
## npm tailwind & bootstrap



# Day 1 
- index
- map
- style
- tabIndex
```
function App() {

  const todos = [ 'todo1','todo2','todo3'];
  return (
    <div className="App" tabIndex="2">
      <ul >
          {todos.map((todo,index) => (
            <li style{{color: "red"}} key={index}>
              {todo}
            </li>
          ))}
      </ul>
    </div>

  );
}

export default App;
```
# Day 2
- props
- component

## npm i classnames
```

import Button from "./components/Button";

function App() {

  return (
    <div className="App" >
      <Button text="Buton Örneği" variant="success"/>
    </div>

  );
}

export default App;


Button.js

// Dilerseniz props şeklinde bilgileri öğrenebilirsiniz. function Button(props) <button>{props.text}</button>
// Distiraction şeklinde kullanım tavsiye edilir. Button({text , variant})   <button>{text} {variant} </button>

function Button({text , variant}) {
    return (
        <button>
            {text} {variant}
        </button>
    ) 
}

export default Button


```

# Day 3
- useState
- useEffect
- Fetch
- Destroy Example
Burada yapmak istediklerimizi dinleyip ne yapmak istediğimizi belirtlerek kullanım sağlıyoruz. Yaşam döngüsü olarak kullanılmaktadır. useState ve useEffect

```
import { useState } from "react";
import Test from "./components/Test";

function App() { 

  const [show , setShow] = useState(false)
  return (
    <div className="App" >
      <button onClick={() => setShow(show => !show)}>
        {show ? 'Gizle' : ' Göster'}
      </button>
      {show && <Test />}
    </div>

  );
}

export default App;


test.js
import { useEffect, useState } from "react";

export default function Test() {

    // const [count, setCount] = useState(0)
    const [postId, setPostId] = useState(1)
    const [post, setPost] = useState(false)
    
    useEffect(() => {
        console.log('component ilk yüklendiğinde çalışır')
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
        let interval = setInterval(() => console.log('interval çalıştı'), 1000)
        return () => {
            console.log('component destorey')
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/{postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])

    /*
    useEffect(() => {
        console.log('component render oldu')
    })
    */

    return (
        <div>
            <h3>{postId}</h3>
            {post && JSON.stringify(post)}
            <button onClick={() => setPostId(postId => postId + 1)}>Sonraki Konu</button>
            <hr />
            Test Componenti
        </div>
    );
}


```
# Day 4
- useRef JSX elemantlarını reflemek için kullanılır
- forwardRef Componentleri reflemek için kullanılır



```
import {useRef, forwardRef } from "react";

/* Komponent İçin kullanılır */
const Input = forwardRef((props, ref) =>{
  return <input ref={ref} type="text" {... props} />
})

function App() {
 
 /* Div elemanlarına erişmek için kullanılır */
  const inputRef = useRef()
  const focusInput = () => {
    inputRef.current.focus()
  }
  
  return (
    <div className="App" >
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
    </div>

  );
}

export default App;

```


# Day 5
- useReducer
Reducerimizi geniş çaplı projelerde kullanarak state yönetimleri yapıyoruz. Aşşağıda bir apiye istek yaparak kullanım yaptığım bir örneği inceleyebilirsiniz.
```
import { useReducer } from "react";
import {reducer} from "./reducer/reducer";

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

reducer.js

export const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return { ...state, data: "", loading: true, error: "" };
        case "FETCH_SUCCESS":
            return { ...state, loading: false, data: action.payload };
        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

```
