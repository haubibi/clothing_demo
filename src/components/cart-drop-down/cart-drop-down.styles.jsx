import styled from "styled-components";
import {BaseStyleButton, GoogleSignButton, InvertedButton} from '../button/button.styles'


export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    ${BaseStyleButton},
    ${GoogleSignButton},
    ${InvertedButton} {
        margin: auto;
    }
`

export const Cartitems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 30px auto;
    color: #888888;
`