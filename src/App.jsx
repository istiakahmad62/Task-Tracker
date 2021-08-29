import { useState } from 'react';
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        dat: 'Feb 5th at 2:30pm',
        reminder: true,
    },

    {
        id: 2,
        text: 'Meeting at School',
        dat: 'Feb 6th at 1:30pm',
        reminder: true,
    },

    {
        id: 3,
        text: 'Food Shopping',
        dat: 'Feb 5th at 2:30pm',
        reminder: false,
    },
  ])

  // Add Form
  const [showAddTask, setShowAddTask] = useState(false)

  // Add Task
  const addTask = (text, day, isActive) => {
    console.log(text, day, isActive)
    setTasks([...tasks, {
      id: tasks.length + 1,
      text: text,
      dat: day,
      reminder: isActive, 
    }])
  }

  // Delete Task
  const deleteTask = (id) => {
    const modifyArray = (task) => {
      return task.id !== id;
    }

    setTasks(tasks.filter(
      modifyArray
    ))
  }

  // change toogle
  const toogleRemainder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // return App
  return (
    <div className="App container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showTask={showAddTask} />
      {showAddTask ? <AddTask change={addTask} /> : ""}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleRemainder} />) : ( "No Tasks To Show")}
    </div>
  );
}

export default App;
