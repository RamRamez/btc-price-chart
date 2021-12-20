import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCurrentPrice, fetchPriceHistory } from './services/fetchPrices'
import { timeRange } from '../constants'
import { Button } from './styled-components/Button'
import { Gray_600 } from './styled-components/Colors'
import { H2, H6 } from './styled-components/Typography'
import {
  BCHStates,
  setCurrentPrice,
  setIsLoading,
  setPriceHistory,
  setTimeRange
} from '../reducers/BTCSlice'

const formatter = (value, name) => {
  const styledValue = `BTC: $${Math.round(value * 100) / 100}`
  const styledName = new Date(name * 1000)
  return [styledValue, styledName]
}

const ChartsSection = () => {
  const { currentPrice, isLoading, priceHistory, currentTimeRange } = useSelector(BCHStates)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchCurrentPrice().then(res => dispatch(setCurrentPrice(res)))
    fetchPriceHistory(currentTimeRange).then(res => {
      dispatch(setPriceHistory(res))
      dispatch(setIsLoading(false))
    })
  }, [currentTimeRange])

  const renderLineChart = (
    <LineChart width={600} height={300} data={priceHistory} margin={{ top: 50 }}>
      <Line type='monotone' dataKey='open' stroke='#8884d8' />
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis dataKey='time' tick={false} label={`BTC Price (${currentTimeRange.label} - USD)`} />
      <YAxis />
      <Tooltip formatter={formatter} />
    </LineChart>
  )

  const handleClick = input => {
    if (!isLoading && input !== currentTimeRange) {
      dispatch(setIsLoading(true))
      dispatch(setTimeRange(input))
    }
  }

  return (
    <Wrapper>
      <H2>BCH Price</H2>
      <br />
      <H6>Current BCH Price: {currentPrice / 100} $</H6>
      {renderLineChart}
      <TimeRangeSection>
        {Object.values(timeRange).map(i => (
          <Button
            background={isLoading && Gray_600}
            bold
            small
            onClick={() => handleClick(i)}
            key={i.value}
          >
            {i.label}
          </Button>
        ))}
      </TimeRangeSection>
    </Wrapper>
  )
}

const TimeRangeSection = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
  margin-left: 50px;
`

const Wrapper = styled.div`
  margin-top: 50px;
`

export default ChartsSection
