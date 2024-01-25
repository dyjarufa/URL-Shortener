export const urlStorage = {
  savedUrls: (urls) =>
    localStorage.setItem('shortedUrls', JSON.stringify(urls)),
  getUrls: function () {
    const urls = localStorage.getItem('shortedUrls')
    return urls ? JSON.parse(urls) : []
  },
}
