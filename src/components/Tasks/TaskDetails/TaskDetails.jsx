import { FaTimes } from 'react-icons/fa';
import classes from "./TaskDetails.module.css";

const TaskDetails = ({ task, onDelete, onToggle }) => {
    return (
        <div className={['task', (task.reminder ? classes.remainder : '')].join(' ')} onDoubleClick={() => onToggle(task.id)}>
            <h3 className={classes.upperTextCustom}>
                <span>
                    {task.text}
                </span> 
                <span class={classes.deleteBtn}>
                    <FaTimes style={{color: "red", cursor: "pointer"}} onClick={() => onDelete(task.id)} />
                </span>
            </h3>
            <p className={classes.lowerTextCustom}>{task.dat}</p>
        </div>
    )
}

export default TaskDetails;