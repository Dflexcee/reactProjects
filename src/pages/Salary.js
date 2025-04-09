import React, { useState } from 'react';
import './Salary.css';

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
        <div className="job-card">
            <h2 className="job-name" style={{ color: textColor }}>
                Name: {jobDetails.name}
            </h2>
            <p className="job-position" style={{ color: textColor }}>
                Position: {jobDetails.position}
            </p>
            <p className="job-company" style={{ color: textColor }}>
                Company: {jobDetails.company}
            </p>
            <p className="job-salary">
                Salary: ${jobDetails.salary}
            </p>
        </div>
    );

    return (
        <div className="salary-container">
            <div className="salary-header">
                <h1 style={{ color: textColor }}>Job Listings</h1>
                <button 
                    onClick={handleColorToggle}
                    className="color-toggle-button"
                >
                    Toggle Color
                </button>
            </div>
            
            {/* Render all job listings */}
            <div className="job-listings">
                {jobListings.map((job) => (
                    <JobListing key={job.id} jobDetails={job} />
                ))}
            </div>
        </div>
    );
}

export default Salary; 