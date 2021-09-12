import { useState } from "react"
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
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
        <Header name="Gerry" />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'There are no tasks'}
      </div>
    </div>
  );
}

export default App;
