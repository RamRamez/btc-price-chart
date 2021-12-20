import React from 'react'
import styled from '@emotion/styled'

import { H6 } from './styled-components/Typography'
import { Gray_600 } from './styled-components/Colors'
import { formatDate } from './lib/helpers'

// eslint-disable-next-line react/prop-types
const NewsCard = ({ image, title, link, date, categories }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer noopener'>
      <Wrapper>
        <img src={image} alt='news' width='100%' />
        <Title>{title}</Title>
        <Footer>
          <div>{categories[0]}</div>
          <div>|</div>
          <div>{formatDate(date)}</div>
        </Footer>
      </Wrapper>
    </a>
  )
}

const Footer = styled.div`
  margin-top: 10px;
  color: ${Gray_600};
  display: flex;
  gap: 10px;
`

const Title = styled(H6)`
  max-width: 400px;
  margin-top: 10px;
  height: 56px;
  overflow: hidden;
`

const Wrapper = styled.div`
  max-width: 400px;
`

export default NewsCard
