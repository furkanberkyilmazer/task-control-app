import TasksContext from "../context/task";
import TaskShow from "./TaskShow";
import {  useContext } from 'react';

function TaskList() {

  const {tasks} =useContext(TasksContext);


    return ( 
    <div className="task-list">

        {tasks.map((task)=>{  //task,index diyip keye index de verebiliriz.
            return(
            <TaskShow key={task.id} task={task}/>
                )
        })}
    </div> 
    );
}

export default TaskList;