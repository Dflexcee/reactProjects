import './App.css';
import Salary from './components/Salary';
import Task from './components/Task';

function App() {
    return (
        <div style={{
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
         }}>
           
            <Salary />
            <Task />
        </div>
    );
}

export default App;
