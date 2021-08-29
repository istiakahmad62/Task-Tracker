import TaskDetails from "./TaskDetails/TaskDetails";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => {
                return <TaskDetails task={task} onDelete={onDelete} onToggle={onToggle} />
            })}
        </>
    )
};

export default Tasks;