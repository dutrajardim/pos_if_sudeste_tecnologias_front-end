import React, { useContext, useState } from 'react'
import { AppContext } from './AppContextProvider'
import EditIcon from '../icons/EditIcon'
import RemoveIcon from '../icons/RemoveIcon'

function App() {
    return (
        <>
            <h2>Task List com Context API</h2>
            <TaskListInput />
            <TaskList />
        </>
    )
}

function TaskListInput() {
    const [taskName, setTaskName] = useState("")
    const { addTask } = useContext(AppContext)

    const addTaskHandler = () =>
        taskName.length && [setTaskName(""), addTask({ name: taskName })]

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
    const { tasks } = useContext(AppContext)

    return (
        <ul className='task-list'>
            {tasks.map((task, key) => <TaskListItem task={task} idx={key} key={key} />)}
        </ul>
    )
}

function TaskListItem({ task, idx: key }) {
    const { toggleTask, editingKey, removeTask, setEditingKey } = useContext(AppContext)
    const isEditing = editingKey === key
    const hasSpecialWord = /.*((estudar)|(ler)).*/i.test(task.name)

    return (
        <li data-estudar={hasSpecialWord}>
            <input type="checkbox" id={`ctask-${key}`} onChange={() => toggleTask({ key })} />
            {isEditing ? <TaskNameEditor /> :
                <>

                    <label htmlFor={`ctask-${key}`}>
                        {task.checked ? <del>{task.name}</del> : task.name}
                    </label>
                    <div className='actions'>
                        <button onClick={() => setEditingKey({ key })}>
                            <EditIcon />
                        </button>
                        <button onClick={() => removeTask({ key })}>
                            <RemoveIcon />
                        </button>
                    </div>

                </>
            }
        </li>
    )
}

function TaskNameEditor() {
    const { tasks, editingKey, setTaskName } = useContext(AppContext)
    const task = tasks.find((_, key) => key === editingKey)
    const [newName, setNewName] = useState(task.name)
    const updateHandler = () => setTaskName({ name: newName || task.name })

    return (
        <input type="text" className="task-name-editor" autoFocus
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onBlur={updateHandler}
            onKeyDown={e => e.key === 'Enter' && updateHandler()} />
    )
}


export default App