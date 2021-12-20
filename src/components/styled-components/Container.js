import styled from '@emotion/styled'
import { mediaQueries } from '../lib/helpers'

export const Container = styled.div`
  margin: 1rem;
  ${mediaQueries.md} {
    margin: 3rem;
  }
  ${mediaQueries.lg} {
    margin: 5rem;
  }
`
