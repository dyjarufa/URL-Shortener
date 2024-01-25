import { ensureAbsolutPath } from '../utils/ensureAbsolutPath'

export const ShortenUrls = ({ urls }) => {
  return (
    <ul>
      {urls.map(({ id, shortUrl, originalUrl }) => (
        <li key={id}>
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
          <p>
            Original URL:{' '}
            <a
              href={ensureAbsolutPath(originalUrl)}
              rel="noreferrer"
              target="_blank"
            >
              {originalUrl}
            </a>
          </p>
        </li>
      ))}
    </ul>
  )
}
