import { useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

export function ShorterURL() {
  const [originaltUrl, setOriginaltUrl] = useState()
  const [shortedUrl, setShortedUrl] = useState([])

  useEffect(() => {
    const savedUrls = localStorage.getItem('shortedUrl')

    console.log(savedUrls)

    if (savedUrls) {
      setShortedUrl(JSON.parse(savedUrls))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(`${shortedUrl}`, JSON.stringify(originaltUrl))
  }, [originaltUrl, shortedUrl])

  const handleInputChange = (event) => {
    setOriginaltUrl(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const newShortedUrl = `http://localhost:3000/${uuidv4()}`
      setShortedUrl([...shortedUrl, newShortedUrl])
    } catch (error) {
      throw new Error('somenthing wrong' + error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={originaltUrl}
          placeholder="set up URL"
          onChange={handleInputChange}
        />
        <button>shorter URL</button>
      </form>
      {shortedUrl.length > 0 && (
        <ul>
          {shortedUrl.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
