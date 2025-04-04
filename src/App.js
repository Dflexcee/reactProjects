import './App.css';
import Salary from './components/Salary';
import { useState } from 'react';

function App() {
    const [textColor, setTextColor] = useState("blue");
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    const handleClick = () => {
        setTextColor(textColor === "black" ? "red" : "black");
    }

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
        };
        setTodoList([...todoList, task]);
        setNewTask(""); // Clear input after adding task
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    };

    const jobListings = [
        {
            salary: 100000,
            position: "Senior Developer",
            company: "Google",
            name: "John Doe"
        },
        {
            salary: 85000,
            position: "Frontend Developer",
            company: "Facebook",
            name: "Jane Smith"
        },
        {
            salary: 120000,
            position: "Full Stack Developer",
            company: "Amazon",
            name: "Bob Johnson" 
        }
    ];
    
    return (
        <div style={{
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <h1 style={{ color: textColor }}>Job Listings</h1>
            <button 
                onClick={handleClick}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Click me
            </button>
            {jobListings.map((listing, index) => (
                <Salary key={index} jobDetails={listing} textColor={textColor} />
            ))}

            <div className="addTask" style={{ marginTop: '20px' }}>
                <input 
                    value={newTask}
                    onChange={handleChange}
                    style={{
                        padding: '8px',
                        marginRight: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ddd'
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
            <div className="list" style={{ marginTop: '20px' }}>
                {todoList.map((task) => (
                    <div 
                        key={task.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px',
                            margin: '5px 0',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px'
                        }}
                    >
                        <h3 style={{ margin: '0' }}>{task.taskName}</h3>
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
                ))}
            </div>
        </div>
    );
}

export default App;
