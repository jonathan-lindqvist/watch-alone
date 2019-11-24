import React, { useState } from 'react'
const App: React.FC = () => {

  const [url, setUrl] = useState('')
  const [videoID, setVideoID] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let id = url.split('v=')[1]
    const ampersandPosition = id.indexOf('&')
    if(ampersandPosition !== -1) {
      id = id.substring(0, ampersandPosition)
    }
    setVideoID(id)
  }

  return (
    <div>
      <h1>WatchAlone</h1>
      <a href={url}>{url}</a>
      <form onSubmit={handleSubmit}>
        <input type="text" value={url} onChange={event => setUrl(event.target.value)} placeholder="Youtube url here" />
        <input type="submit" value="Search"></input>
      </form>
      <iframe title="ytFrame" src={`https://www.youtube.com/embed/${videoID}`}></iframe>
    </div>
  );
}

export default App;
