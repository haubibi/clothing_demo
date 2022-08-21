import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles'

export const BaseStyleButton = styled.button`
  min-width: 165px;
    width: 210px;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`
export const GoogleSignButton = styled(BaseStyleButton)`
    background-color: #4285f4;
    color: white;
    &:hover {
      background-color: #357ae8;
      border: none;
    }
`

export const InvertedButton = styled(BaseStyleButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`

export const ButtonSpinner = styled(SpinnerContainer)`
  margin: auto;
  width: 30px;
  height: 30px;
`
