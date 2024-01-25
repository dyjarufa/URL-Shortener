import { UrlInputForm } from '../components/UrlInputForm'
import { ShortenUrls } from '../components/ShortenUrlList'
import { useShortenedUrls } from '../hooks/useShortenedUrlls'

export function ShorterURL() {
  const { addShortenedUrl, error, shortedUrls } = useShortenedUrls()

  return (
    <div>
      <UrlInputForm onSubmit={addShortenedUrl} />
      {error && <p>{error}</p>}
      <ShortenUrls urls={shortedUrls} />
    </div>
  )
}
