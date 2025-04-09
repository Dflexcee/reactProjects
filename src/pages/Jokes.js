import React, { useState } from 'react';
import './Jokes.css';

function Jokes() {
  const [jokes] = useState([
    {
      id: 1,
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!"
    },
    {
      id: 2,
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!"
    },
    {
      id: 3,
      setup: "What's the best thing about Switzerland?",
      punchline: "I don't know, but the flag is a big plus!"
    },
    {
      id: 4,
      setup: "Did you hear about the mathematician who's afraid of negative numbers?",
      punchline: "He'll stop at nothing to avoid them!"
    }
  ]);

  return (
    <div className="jokes-container">
      <h1>Jokes Collection</h1>
      <p>Enjoy some of these programmer-friendly jokes!</p>
      
      <div className="jokes-list">
        {jokes.map(joke => (
          <div className="joke-card" key={joke.id}>
            <h3>{joke.setup}</h3>
            <p>{joke.punchline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jokes; 