import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// components
import ToDoList from './components/todolist.js';

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
