import React from 'react';

function Salary({ jobDetails, textColor }) {
  return (
    <div className="p-6 m-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
      <h2 style={{ color: textColor }}>Name: {jobDetails.name}</h2>
      <p style={{ color: textColor }}>Position: {jobDetails.position}</p>
      <p style={{ color: textColor }}>Company: {jobDetails.company}</p>
      <p className="text-xl font-semibold text-green-600">
        Salary: ${jobDetails.salary}
      </p>
    </div>
  );
}

export default Salary; 