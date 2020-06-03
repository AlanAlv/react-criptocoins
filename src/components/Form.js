import React from 'react';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &::hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Form = () => {

    const COINS = [
        {code: 'USD', name: 'American Dollar'},
        {code: 'MXN', name: 'Mexican Peso'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'British Pound'}
    ]
    const [coin, SelectCoin] = useCoin('Choose your coin', '', COINS);

    return (  
        <form>

            <SelectCoin />
            <Button
                type="submit"
                value="Calculate"
            ></Button>
        </form>
    );
}
 
export default Form;