export const ensureAbsolutPath = (url) => {
  const HTTP_PREFIX = 'http://'
  const HTTPS_PREFIX = 'https://'

  if (!url.startsWith(HTTP_PREFIX) && !url.startsWith(HTTPS_PREFIX)) {
    return `${HTTPS_PREFIX}${url}`
  }

  return url
}
