import React from 'react'
import { Container } from './components/styled-components/Container'
import NewsSection from './components/newsSection'
import ChartsSection from './components/chartsSection'

const App = () => {
  return (
    <Container>
      <ChartsSection />
      <NewsSection />
    </Container>
  )
}

export default App
