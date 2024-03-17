import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';



function Library() {
    
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios.get('https://api.api-ninjas.com/v1/motorcycles', {
      params: { make, model },
      headers: { 'X-Api-Key': 'YLGzLtYlue4esmCX9iiDXg==rhGA94iYpFF1V4ax' }
    })
    .then(response => {
      setResult(response.data);
      setError(null);
    })
    .catch(error => {
      setResult([]);
      setError(error.response.data);
    });
  };

  const handleFetch = () => {
    fetchData();
  };

  const handleReset = () => {
    setResult([]);
    setError(null);
  };

  return (
  
    <div>
        <Header />
      <input type="text" value={make} onChange={e => setMake(e.target.value)} placeholder="Make" />
      <input type="text" value={model} onChange={e => setModel(e.target.value)} placeholder="Model" />
      <button onClick={handleFetch}>Fetch Data</button>
      <button onClick={handleReset}>Reset</button>

      {error && <div>Error: {error}</div>}

      {result.length > 0 && (
        <div>
          <h2>Results:</h2>
          <ul>
            {result.map(motorcycle => (
              <li key={motorcycle.id}>
                <strong>{motorcycle.make}</strong> - {motorcycle.model}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Library;
