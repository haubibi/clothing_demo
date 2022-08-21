import styled from "styled-components";
import Button from "../button/button.component";


export const PaymenntFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    height: 500px;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    column-gap: 30px;
`

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;
    margin-bottom: 30px;
`