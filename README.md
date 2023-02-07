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
