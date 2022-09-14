import './App.css';
import TodoList from "./TodoList";
import UsersList from "./UsersList";

function App() {
  return (
    <div className='App'>
      <h1>Higher Order Component</h1>
      <div className='section'>
        <div>
          <UsersList />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App;
