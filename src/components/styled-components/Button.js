import styled from '@emotion/styled'
import { Pinky_500 } from './Colors'

export const Button = styled.button`
  font-family: Red Hat Text, sans-serif;
  background: ${props => props.background || Pinky_500};
  border-radius: 48px;
  border-color: transparent;
  color: ${props => props.color || 'white'};
  height: ${props => {
    if (props.small) return '48px'
    else return '66px'
  }};
  font-weight: ${props => {
    if (props.bold) return 700
    else return 400
  }};
  font-size: ${props => {
    if (props.small) return '12px'
    else return '16px'
  }};
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  display: block;
  padding: ${props => {
    if (props.small) return '0 40px'
    else return '0 80px'
  }};
`
