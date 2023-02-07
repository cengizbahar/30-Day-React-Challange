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


```
```
