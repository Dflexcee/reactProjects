import React, { useState } from 'react';

function Salary() {
    // State for text color with blue as default
    const [textColor, setTextColor] = useState("blue");
    
    // Function to toggle text color between blue and red
    const handleColorToggle = () => {
        setTextColor(textColor === "blue" ? "red" : "blue");
    };

    // Sample job listings data
    const jobListings = [
        {
            id: 1,
            salary: 100000,
            position: "Senior Developer",
            company: "Google",
            name: "John Doe"
        },
        {
            id: 2,
            salary: 85000,
            position: "Frontend Developer",
            company: "Facebook",
            name: "Jane Smith"
        },
        {
            id: 3,
            salary: 120000,
            position: "Full Stack Developer",
            company: "Amazon",
            name: "Bob Johnson" 
        }
    ];

    // Component to render individual job listing
    const JobListing = ({ jobDetails }) => (
        <div style={{
            padding: '20px',
            margin: '10px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #ddd'
        }}>
            <h2 style={{ color: textColor, fontSize: '24px', marginBottom: '10px' }}>
                Name: {jobDetails.name}
            </h2>
            <p style={{ color: textColor, fontSize: '18px', marginBottom: '8px' }}>
                Position: {jobDetails.position}
            </p>
            <p style={{ color: textColor, fontSize: '18px', marginBottom: '8px' }}>
                Company: {jobDetails.company}
            </p>
            <p style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>
                Salary: ${jobDetails.salary}
            </p>
        </div>
    );

    return (
        <div>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                <h1 style={{ color: textColor }}>Job Listings</h1>
                <button 
                    onClick={handleColorToggle}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Toggle Color
                </button>
            </div>
            
            {/* Render all job listings */}
            <div>
                {jobListings.map((job) => (
                    <JobListing key={job.id} jobDetails={job} />
                ))}
            </div>
        </div>
    );
}

export default Salary; 