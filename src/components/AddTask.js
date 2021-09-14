import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [task, setTask] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!task) {
            alert('Please add task')
            return
        }
        onAdd({ task, date, reminder })
        setTask('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control-check'>
                <label>Set reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save' className='btn btn-block' />
        </form>
    )
}

export default AddTask