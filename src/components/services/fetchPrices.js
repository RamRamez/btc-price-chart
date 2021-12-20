import axios from 'axios'
import { config } from '../../config'
import { errorHandler } from '../errorHandler'
import { formatChartsDate } from '../lib/helpers'

const dayToSec = num => 24 * 60 * 60 * num

export const fetchCurrentPrice = async () => {
  try {
    const price = await axios.get(config.BCH_CURRENT_PRICE_URL)
    return price.data?.price
  } catch (err) {
    errorHandler(err)
  }
}

export const fetchPriceHistory = async type => {
  try {
    const symbol = 'BCH'
    const currency = 'USD'
    const tTo = Math.ceil(Date.now() / 1000)
    const tFrom = tTo - dayToSec(type.value)
    const query =
      type.query + '?symbols=' + symbol + '&quotes=' + currency + '&tFrom=' + tFrom + '&tTo=' + tTo
    const response = await axios.get(config.PRICE_HISTORY_BASE_URL + query)
    const data = response.data?.data
    const symbolData = data && data[symbol]
    const historyData = symbolData && symbolData[currency]?.history
    for (let i = 0; i < historyData.length; i++) {
      historyData[i].time = formatChartsDate(historyData[i].time * 1000)
    }
    return historyData?.reverse()
  } catch (err) {
    errorHandler(err)
  }
}
