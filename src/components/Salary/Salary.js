import React from 'react';

function Salary({ job }) {
  return (
    <div>
      <h2>Name: {job.name}</h2>
      <p>Position: {job.position}</p>
      <p>Company: {job.company}</p>
      <p>Salary: ${job.salary}</p>
    </div>
  );
}

export default Salary; 