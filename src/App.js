import './App.css';
import Salary from './components/Salary';
import { useState } from 'react';

function App() {
    const [textColor, setTextColor] = useState("black");
    
    const handleClick = () => {
        setTextColor(textColor === "black" ? "red" : "black");
    }

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
        <div className="App">
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
        </div>
    );
}

export default App;
