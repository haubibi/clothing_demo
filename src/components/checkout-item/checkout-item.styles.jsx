import styled from 'styled-components';

export const CheckoutItemCon = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    margin-top: 15px;
    text-align: center;
    align-items: center;
    div{
        flex: 1;
    }
`

export const ButtonSpan = styled.span`
    cursor: pointer;
    margin: 0px 10px 0px 10px;
`;

export const ImgContainer = styled.div`
    padding: 15px 0px 15px 0px;
    img {
        width: 50%;
        height: auto;
    }
`
