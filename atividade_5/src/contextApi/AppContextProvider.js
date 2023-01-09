import React, { useState } from "react";

export const AppContext = React.createContext(null)

export default function AppContextProvider({ children }) {
    const [tasks, setTasks] = useState([])
    const [editingKey, setEditingKeyS] = useState(-1)

    const value = {
        tasks,
        editingKey,
        addTask: ({ name }) => setTasks([...tasks, { checked: false, name }]),
        toggleTask: ({ key }) => setTasks(tasks.map((task, idx) => ({ ...task, checked: idx === key ? !task.checked : task.checked }))),
        setTaskName: ({ name }) => [setTasks(tasks.map((task, idx) => ({ ...task, name: idx === editingKey ? name : task.name }))), setEditingKeyS(-1)],
        setEditingKey: ({ key }) => setEditingKeyS(key),
        removeTask: ({ key }) => setTasks(tasks.filter((_, idx) => key !== idx))
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}