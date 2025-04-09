import React, { useState, useEffect } from 'react';
import './Task.css';

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
        <div className="task-container">
            <div className="task-header">
                <h2>Todo List</h2>
                {todoList.length > 0 && (
                    <button 
                        onClick={clearAllTasks}
                        className="clear-button"
                    >
                        Clear All Tasks
                    </button>
                )}
            </div>
            
            {/* Task Input Section */}
            <div className="add-task">
                <input 
                    value={newTask}
                    onChange={handleChange}
                    placeholder="Enter a new task"
                    className="task-input"
                />
                <button 
                    onClick={addTask}
                    className="add-button"
                >
                    Add Task
                </button>
            </div>    

            {/* Task List Section */}
            <div className="task-list">
                {todoList.map((task) => (
                    <div 
                        key={task.id}
                        className="task-item"
                    >
                        <div className="task-info">
                            <h3 className={task.completed ? "task-name completed" : "task-name"}>
                                {task.taskName}
                                <small className={task.completed ? "task-status completed" : "task-status incomplete"}>
                                    ({task.completed ? 'completed' : 'incomplete'})
                                </small>
                            </h3>
                        </div>
                        <div className="task-actions">
                            <button 
                                onClick={() => toggleComplete(task.id)}
                                className={task.completed ? "toggle-button completed" : "toggle-button"}
                            >
                                {task.completed ? '✓' : '○'}
                            </button>
                            <button 
                                onClick={() => deleteTask(task.id)}
                                className="delete-button"
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