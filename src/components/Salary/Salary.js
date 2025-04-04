import React from 'react';

function Salary({ jobDetails, textColor }) {
  return (
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
}

export default Salary; 