
import Button from "./components/Button";

function App() {

  const todos = ['todo1', 'todo2', 'todo3'];
  return (
    <div className="App" >
      <Button text="Buton Örneği" variant="success"/>
      <ul on>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>

  );
}

export default App;
