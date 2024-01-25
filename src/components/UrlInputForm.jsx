import { useState } from 'react'

export const UrlInputForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (url) {
      onSubmit(url)
      setUrl('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        placeholder="Shorten URL"
      />
      <button type="submit">Shorten URL</button>
    </form>
  )
}
