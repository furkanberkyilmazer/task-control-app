import axios from 'axios';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(async ()=>{
      
    const response = await axios.get("http://localhost:3000/tasks");
    console.log("gelen data:"+response);  
    setTasks(response.data);
  },[])  //köşeli boş parantez sadece ilk çalıştığında çalışmasını sağlar.
  // parantez olmazsa ilk çalıştığında ve usestateler her değiştiğinde çalışır.
  // pazartez içerisinde bir usestate adı olursa ilk çalıştığında ve o usestate değiştiğinde çalışır.


  const createTask =async (title, taskDesc) => {
    const response =await axios.post("http://localhost:3000/tasks",{
      title,taskDesc
    })
    const createdTasks = [
      ...tasks,
      // {
      //   id: Math.round(Math.random() * 999999),
      //   title,
      //   taskDesc,
      // }  //jsonserver yokken
      response.data
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById =async (id) => {
    await axios.delete("http://localhost:3000/tasks/"+id);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskById =async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put("http://localhost:3000/tasks/"+id,{
      title:updatedTitle,
      taskDesc:updatedTaskDesc
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
