import { useEffect, useState } from 'react'
import { urlStorage } from '../utils/urlStorage'
import { v4 as uuidv4 } from 'uuid'

export const useShortenedUrls = () => {
  const [shortedUrls, setShortedUrls] = useState(urlStorage.getUrls())
  const [error, setError] = useState('')

  useEffect(() => {
    urlStorage.savedUrls(shortedUrls)
  }, [shortedUrls])

  const addShortenedUrl = (originalUrl) => {
    try {
      const uniqueId = uuidv4()

      console.log('uniqueId', uniqueId)
      const newShortedUrl = {
        id: uniqueId,
        shortUrl: `localhost:3000/${uniqueId}`,
        originalUrl,
      }

      console.log(newShortedUrl)

      setShortedUrls([...shortedUrls, newShortedUrl])
    } catch (error) {
      setError("Couldn't Shorten the URL" + error)
    }
  }

  return {
    shortedUrls,
    error,
    addShortenedUrl,
  }
}
