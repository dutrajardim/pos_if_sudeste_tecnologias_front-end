import React, { useState } from "react"
import EditIcon from '../icons/EditIcon'
import RemoveIcon from '../icons/RemoveIcon'

export default function App() {
    const [tasks, setTasks] = useState([])
    const addTask = ({ name }) => setTasks([...tasks, { name, checked: false }])
    const toggleTask = (key) => () => setTasks(tasks.map(({ checked, name }, idx) => ({ name, checked: idx === key ? !checked : checked })))
    const removeTask = (key) => () => setTasks(tasks.filter((_, idx) => key !== idx))
    const setTaskName = (key) => ({ name }) => setTasks(tasks.map((task, idx) => ({ ...task, name: idx === key ? name : task.name })))

    return (
        <>
            <h2>Task List com States</h2>
            <TaskListInput addTask={addTask} />
            <TaskList
                tasks={tasks}
                toggleTask={toggleTask}
                removeTask={removeTask}
                setTaskName={setTaskName} />
        </>
    )
}

function TaskListInput({ addTask }) {
    const [taskName, setTaskName] = useState("")
    const addTaskHandler = () => taskName.length && [setTaskName(""), addTask({ name: taskName })]

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

function TaskList({ tasks, toggleTask, removeTask, setTaskName }) {
    const [editingKey, setEditingKey] = useState(-1)

    return (
        <ul className='task-list'>
            {tasks.map((task, key) =>
                <TaskListItem
                    task={task}
                    toggleTask={toggleTask(key)}
                    idx={key}
                    isEditing={editingKey === key}
                    setEditingKey={setEditingKey}
                    removeTask={removeTask(key)}
                    setTaskName={setTaskName(key)}
                    key={key} />)}
        </ul>
    )
}

function TaskListItem({ task, toggleTask, isEditing, setEditingKey, removeTask, setTaskName, idx: key }) {
    const hasSpecialWord = /.*((estudar)|(ler)).*/i.test(task.name)
    const setTaskNameHandler = (arg) => [setTaskName(arg), setEditingKey(-1)]

    return (
        <li data-estudar={hasSpecialWord}>
            <input type="checkbox" id={`task-${key}`} onChange={() => toggleTask()} />
            {isEditing ? <TaskNameEditor task={task} setTaskName={setTaskNameHandler} /> :
                <>
                    <label htmlFor={`task-${key}`}>
                        {task.checked ? <del>{task.name}</del> : task.name}
                    </label>
                    <div className='actions'>
                        <button onClick={() => setEditingKey(key)}>
                            <EditIcon />
                        </button>
                        <button onClick={() => removeTask()}>
                            <RemoveIcon />
                        </button>
                    </div>
                </>
            }
        </li>
    )
}

function TaskNameEditor({ task, setTaskName }) {
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