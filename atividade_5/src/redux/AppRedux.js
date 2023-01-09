import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditIcon from '../icons/EditIcon'
import RemoveIcon from '../icons/RemoveIcon'
import { addTask, removeTask, setTaskName, toggleTask, setEditingKey } from './store'

function App() {
    return (
        <>
            <h2>Task List com Redux</h2>
            <TaskListInput />
            <TaskList />
        </>
    )
}

function TaskListInput() {
    const [taskName, setTaskName] = useState("")
    const dispatch = useDispatch()

    const addTaskHandler = () =>
        taskName.length && [setTaskName(""), dispatch(addTask({ name: taskName }))]

    return (
        <div className="task-list-input">
            <input type="text"
                onChange={(e) => setTaskName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTaskHandler()}
                value={taskName} />
            <button onClick={addTaskHandler} disabled={taskName === ''}>+</button>
        </div>
    )
}

function TaskList() {
    const tasks = useSelector(state => state.tasks)

    return (
        <ul className='task-list'>
            {tasks.map((task, key) => <TaskListItem task={task} idx={key} key={key} />)}
        </ul>
    )
}

function TaskListItem({ task, idx: key }) {
    const dispatch = useDispatch()
    const editingKey = useSelector(state => state.editingKey)
    const isEditing = editingKey === key
    const hasSpecialWord = /.*((estudar)|(ler)).*/i.test(task.name)

    return (
        <li data-estudar={hasSpecialWord}>
            <input type="checkbox" id={`rtask-${key}`} onChange={() => dispatch(toggleTask({ key }))} />
            {isEditing ? <TaskNameEditor /> :
                <>

                    <label htmlFor={`rtask-${key}`}>
                        {task.checked ? <del>{task.name}</del> : task.name}
                    </label>
                    <div className='actions'>
                        <button onClick={() => dispatch(setEditingKey({ key }))}>
                            <EditIcon />
                        </button>
                        <button onClick={() => dispatch(removeTask({ key }))}>
                            <RemoveIcon />
                        </button>
                    </div>

                </>
            }
        </li>
    )
}

function TaskNameEditor() {
    const task = useSelector(state => state.tasks.find((_, key) => key === state.editingKey))
    const dispatch = useDispatch()
    const [newName, setNewName] = useState(task.name)
    const updateHandler = () => dispatch(setTaskName({ name: newName || task.name }))

    return (
        <input type="text" className="task-name-editor" autoFocus
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onBlur={updateHandler}
            onKeyDown={e => e.key === 'Enter' && updateHandler()} />
    )
}

export default App