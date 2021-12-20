export const feedParser = (xmlInput, feedNum) => {
  const parser = new DOMParser()
  const xml = parser.parseFromString(xmlInput, 'text/xml')
  const items = xml.getElementsByTagName('channel')[0].getElementsByTagName('item')
  const jsonArray = []
  const num = feedNum && feedNum < items.length ? feedNum : items.length
  for (let i = 0; i < num; i++) {
    jsonArray.push(xmlNewsToJson(items[i]))
  }
  return jsonArray
}

const xmlNewsToJson = xmlNews => {
  const categoriesXml = xmlNews.getElementsByTagName('category')
  const categories = []
  for (let i = 0; i < categoriesXml.length; i++) {
    categories.push(categoriesXml[i].childNodes[0].textContent)
  }
  return {
    title: xmlNews.getElementsByTagName('title')[0].childNodes[0].textContent,
    link: xmlNews.getElementsByTagName('link')[0].childNodes[0].textContent,
    date: xmlNews.getElementsByTagName('pubDate')[0].childNodes[0].textContent,
    categories,
    creator: xmlNews.getElementsByTagName('dc:creator')[0].childNodes[0].textContent,
    guid: xmlNews.getElementsByTagName('guid')[0].childNodes[0].textContent,
    description: xmlNews.getElementsByTagName('description')[0].childNodes[0].textContent,
    content: xmlNews.getElementsByTagName('content:encoded')[0].childNodes[0].textContent,
    image: xmlNews.getElementsByTagName('bnmedia:url')[0].childNodes[0].textContent
  }
}

export const formatDate = dateString => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.toLocaleString('default', { month: 'short' })
  const day = date.getDate()
  return day + ' ' + month + ' ' + year
}

export const formatChartsDate = dateString => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.toLocaleString('default', { month: 'short' })
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  return month + ' ' + day + ', ' + year + ', ' + hour + ':' + minute
}

export const breakPoints = {
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200
}

export const mediaQueries = {
  sm: `@media (min-width: ${breakPoints.sm}px)`,
  md: `@media (min-width: ${breakPoints.md}px)`,
  lg: `@media (min-width: ${breakPoints.lg}px)`,
  xl: `@media (min-width: ${breakPoints.xl}px)`
}
