import React, { useState } from 'react'
const App: React.FC = () => {

  const [url, setUrl] = useState('');

  return (
    <div>
      <h1>WatchAlone</h1>
      <a href={url}>{url}</a>
      <input type="text" value={url} onChange={event => setUrl(event.target.value)} />
      <iframe src={url}></iframe>
    </div>
  );
}

export default App;
