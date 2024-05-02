import { useState , useContext } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/task";

function TaskShow({task}) {


    const {editTaskById,deleteTaskById} =useContext(TasksContext);

    const [showUpdate, setShowUpdate] = useState(false)

    const handleDelete=()=>{
       // onDelete(task.id);
       deleteTaskById(task.id)
    }
    const handleUpdate=()=>{
        setShowUpdate(!showUpdate);
    }
    const handleSubmit=(id,updatedTitle,updatedTaskDesc)=>{
        //onUpdate(id,updatedTitle,updatedTaskDesc);
        editTaskById(id,updatedTitle,updatedTaskDesc);
        setShowUpdate(false);

    }
    console.log("Task: " + task.id);
    return ( 
        <div className="task-show">
            {showUpdate ? <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />:<div>
                <h3 className="task-title">Your Task</h3>
            <p>{task.title}</p>
            <h3 className="task-title">Things To Do</h3>
            <p>{task.taskDesc}</p>
            <div>
                <button className="task-delete" onClick={handleDelete}>Delete</button>
                <button className="task-edit" onClick={handleUpdate}>Update</button>
            </div>
            </div>
            }
            
            

        </div>
     );
}

export default TaskShow;