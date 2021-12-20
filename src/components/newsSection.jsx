import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'

import { H2 } from './styled-components/Typography'
import NewsCard from './newsCard'
import fetchFeed from './services/fetchFeed'
import { feedParser } from './lib/helpers'
import { newsStates, setFeeds } from '../reducers/newsSlice'

const newsNumToFetch = 4

const NewsSection = () => {
  const { feeds } = useSelector(newsStates)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchFeed().then(res => {
      const feedArray = feedParser(res, newsNumToFetch)
      dispatch(setFeeds(feedArray))
    })
  }, [])

  return (
    <Wrapper>
      <H2>Latest News</H2>
      <br />
      <NewsContainer>
        {feeds?.map(i => (
          <NewsCard key={i.guid} {...i} />
        ))}
      </NewsContainer>
    </Wrapper>
  )
}

const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`

const Wrapper = styled.div`
  margin-top: 80px;
`

export default NewsSection
