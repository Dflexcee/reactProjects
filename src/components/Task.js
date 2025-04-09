import React, { useState, useEffect } from 'react';

/**
 * Task Component
 * A todo list component that allows users to add, view, delete, and complete tasks.
 * Features:
 * - Add new tasks with validation
 * - Delete existing tasks
 * - Mark tasks as complete
 * - Visual feedback for completed tasks
 * - Persistent storage using localStorage
 * - Clear all tasks functionality
 * - Clean and modern UI with responsive design
 */
function Task() {
    // State to store the list of todos
    // Each todo has an id, taskName, and completed status
    const [todoList, setTodoList] = useState(() => {
        // Initialize state from localStorage if available
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    
    // State to manage the input field for new tasks
    const [newTask, setNewTask] = useState("");

    // Effect to update localStorage whenever todoList changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todoList));
    }, [todoList]);

    /**
     * Handles changes in the input field
     * Updates the newTask state with the current input value
     * @param {Object} event - The input change event
     */
    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    /**
     * Adds a new task to the todo list
     * Features:
     * - Prevents empty tasks from being added
     * - Generates unique IDs for each task
     * - Initializes completion status
     * - Clears input field after adding
     * - Maintains immutability when updating state
     * - Saves to localStorage automatically
     */
    const addTask = () => {
        // Don't add empty or whitespace-only tasks
        if (newTask.trim() === "") return;

        // Create new task object with unique ID
        const task = {
            // If list is empty, start with ID 1, otherwise increment last ID
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false // Initialize completion status
        };

        // Add new task to list while preserving existing tasks
        setTodoList([...todoList, task]);
        
        // Clear input field after adding task
        setNewTask("");
    };

    /**
     * Toggles the completion status of a task
     * @param {number} id - The ID of the task to toggle
     * Updates localStorage automatically
     */
    const toggleComplete = (id) => {
        setTodoList(todoList.map(task => 
            task.id === id 
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    /**
     * Deletes a task from the todo list
     * @param {number} id - The ID of the task to delete
     * Updates localStorage automatically
     */
    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    };

    /**
     * Clears all tasks from the todo list
     * Updates localStorage automatically
     */
    const clearAllTasks = () => {
        setTodoList([]);
    };

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            marginTop: '20px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                <h2 style={{ color: '#333', margin: 0 }}>Todo List</h2>
                {todoList.length > 0 && (
                    <button 
                        onClick={clearAllTasks}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Clear All Tasks
                    </button>
                )}
            </div>
            
            {/* Task Input Section */}
            <div className="addTask" style={{ marginBottom: '20px' }}>
                <input 
                    value={newTask}
                    onChange={handleChange}
                    placeholder="Enter a new task"
                    style={{
                        padding: '8px',
                        marginRight: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        width: '200px'
                    }}
                />
                <button 
                    onClick={addTask}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Add Task
                </button>
            </div>    

            {/* Task List Section */}
            <div className="list">
                {todoList.map((task) => (
                    <div 
                        key={task.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px',
                            margin: '5px 0',
                            backgroundColor: 'white',
                            borderRadius: '4px',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <h3 style={{ 
                                margin: '0',
                                color: task.completed ? '#28a745' : 'inherit'
                            }}>
                                {task.taskName}
                                <small style={{ 
                                    marginLeft: '10px', 
                                    color: task.completed ? '#28a745' : '#dc3545',
                                    fontSize: '0.8em' 
                                }}>
                                    ({task.completed ? 'completed' : 'incomplete'})
                                </small>
                            </h3>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button 
                                onClick={() => toggleComplete(task.id)}
                                style={{
                                    padding: '5px 10px',
                                    backgroundColor: task.completed ? '#198754' : '#6c757d',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                {task.completed ? '✓' : '○'}
                            </button>
                            <button 
                                onClick={() => deleteTask(task.id)}
                                style={{
                                    padding: '5px 10px',
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                X
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Task; 