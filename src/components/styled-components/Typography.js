import styled from '@emotion/styled'

export const H2 = styled.h2`
  font-family: TeX Gyre Adventor, sans-serif;
  font-weight: 700;
  font-size: 52px;
  line-height: 80px;
  margin: 0;
  color: ${props => props.color || 'inherit'};
`

export const H6 = styled.h6`
  font-family: TeX Gyre Adventor, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.005em;
  margin: 0;
  color: ${props => props.color || 'inherit'};
`
