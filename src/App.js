import './App.css';
import Salary from './components/Salary';

function App() {
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
            <h1>Job Listings</h1>
            {jobListings.map((listing, index) => (
                <Salary key={index} jobDetails={listing} />
            ))}
        </div>
    );
}

export default App;
