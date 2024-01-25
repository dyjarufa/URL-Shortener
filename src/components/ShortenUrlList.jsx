export const ShortenUrls = ({ urls }) => {
  return (
    <ul>
      {urls.map(({ id, shortUrl, originalUrl }) => (
        <li key={id}>
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
          <p>Original URL: {originalUrl}</p>
        </li>
      ))}
    </ul>
  )
}
