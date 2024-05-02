import axios from 'axios';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useEffect, useState , useContext } from 'react';
import TasksContext from './context/task';

function App() {

  const {fetchTask} =useContext(TasksContext);


  useEffect(()=>{
      ""
   fetchTask();
  },[])  //köşeli boş parantez sadece ilk çalıştığında çalışmasını sağlar.
  // parantez olmazsa ilk çalıştığında ve usestateler her değiştiğinde çalışır.
  // pazartez içerisinde bir usestate adı olursa ilk çalıştığında ve o usestate değiştiğinde çalışır.
 
  return (
    <div className="App">
      <TaskCreate/>
      <h1>Tasks</h1>    
      <TaskList/>    
    </div>

  );
}

export default App;
