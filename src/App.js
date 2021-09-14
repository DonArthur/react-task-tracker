import { useState } from "react"
import './App.css';
import AddTask from "./components/AddTask";
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
  const [isAdding, setIsAdding] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        task: 'Doctor Appointment',
        date: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        task: 'Meeting at School',
        date: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        task: 'Food Shopping',
        date: 'Feb 5th at 2:30pm',
        reminder: false
    }
])

//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  let newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

return (
    <div className="App">
      <div className="container">
        <Header name="Gerry" onAdd={() => setIsAdding(!isAdding)} isAdding={isAdding} />
        { isAdding && <AddTask onAdd={addTask} /> }
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'There are no tasks'}
      </div>
    </div>
  );
}

export default App;
