import axios from 'axios'
import { config } from '../../config'
import { errorHandler } from '../errorHandler'

const fetchFeed = async () => {
  try {
    const feed = await axios.get(config.FEED_URL)
    return feed.data
  } catch (err) {
    errorHandler(err)
  }
}

export default fetchFeed
