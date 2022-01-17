import './App.css';
import AddTask from './components/AddTask'
import ListOfTasks from './components/ListOfTasks';
import Task from './components/Task';
function App() {
  return (
    <div className="App">
      <Task/>
      
      <div>
        <AddTask />
        <ListOfTasks/>
      </div>
    </div>
  );
}

export default App;
