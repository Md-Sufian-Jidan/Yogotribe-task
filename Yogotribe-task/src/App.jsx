import { useState } from 'react';

function App() {
  const [fact, setFact] = useState('');

  const fetchFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error('Error fetching fact:', error);
      setFact('Failed to load fact.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <button onClick={fetchFact}>Get Random Cat Fact</button>
      <p>{fact}</p>
    </div>
  );
}

export default App;