import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { urlStorage } from '../utils/urlStorage'
import { UrlInputForm } from '../components/UrlInputForm'
import { ShortenUrls } from '../components/ShortenUrlList'

export function ShorterURL() {
  const [shortedUrls, setShortedUrls] = useState(urlStorage.getUrls())
  const [error, setError] = useState('')

  useEffect(() => {
    urlStorage.savedUrls(shortedUrls)
  }, [shortedUrls])

  const addShortenedUrl = (originalUrl) => {
    try {
      const uniqueId = uuidv4()
      const newShortedUrl = {
        id: uniqueId,
        shortUrl: `localhost:3000/${uniqueId}`,
        originalUrl,
      }

      setShortedUrls([...shortedUrls, newShortedUrl])
    } catch (error) {
      setError("Couldn't Shorten the URL" + error)
    }
  }

  return (
    <div>
      <UrlInputForm onSubmit={addShortenedUrl} />
      {error && <p>{error}</p>}
      <ShortenUrls urls={shortedUrls} />
    </div>
  )
}
