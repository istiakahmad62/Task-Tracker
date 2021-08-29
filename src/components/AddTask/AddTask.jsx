import { useState } from "react";

const AddTask = ({ change }) => {
    const [task, setTask] = useState('')
    const [day, setDay] = useState('')
    const [remainder, setRemainder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!task){
            alert("Please enter a task!")
            return
        }
        
        change(task, day, remainder)
        setTask('')
        setDay('')
        setRemainder(false)
    }

    return (
        <form className="form-custom" onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleNameControlInput1" className="form-label"><h5>Task</h5></label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add Task" 
                value={task} onChange={(e) => {setTask(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleNameControlInput1" className="form-label"><h5>Day & Time</h5></label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add Day & Time" 
                value={day} onChange={(e) => {setDay(e.target.value)}} />
            </div>
            <div className="mb-3 form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" 
                value={remainder} onChange={(e) => {setRemainder(e.target.checked)}} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Set Remainder
                </label>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-dark" type="submit">Save Task</button>
            </div>
        </form>
    )
};

export default AddTask;