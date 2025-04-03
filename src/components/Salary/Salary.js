import React from 'react';

function Salary({ jobDetails }) {
  return (
    <div>
      <h2>Name: {jobDetails.name}</h2>
      <p>Position: {jobDetails.position}</p>
      <p>Company: {jobDetails.company}</p>
      <p>Salary: ${jobDetails.salary}</p>
    </div>
  );
}

export default Salary; 