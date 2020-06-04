import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';
import useCryptocoin from '../hooks/useCryptocoin';
import axios from 'axios';
import Error from './Error';
import PropTypes from 'prop-types';

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

const Form = ({ saveCoin, saveCryptocoin }) => {

    // Cryptocoin state
    const [ cryptoList, saveCryptocoins ] = useState([]);
    const [ error, saveError ] = useState(false);

    const COINS = [
        {code: 'USD', name: 'American Dollar'},
        {code: 'MXN', name: 'Mexican Peso'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'British Pound'}
    ]

    const [coin, SelectCoin] = useCoin('Choose your coin', '', COINS);

    const [cryptocoin, SelectCryptocoin] = useCryptocoin('Choose your Cryptocoin', '', cryptoList);

    // API call
    useEffect(() => {
        const callAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);

            saveCryptocoins(result.data.Data);
        }
        callAPI()
    }, []);

    // User clicks submit
    const calculateCoin = e => {
        e.preventDefault();

        // Validation
        if (coin === '' || cryptocoin === ''){
            saveError(true);
            return;
        }

        // Send data to main component
        saveError(false);
        saveCoin(coin);
        saveCryptocoin(cryptocoin);

    }
    return (  
        <form
            onSubmit={calculateCoin}
        >
            {error 
                ? 
                    <Error 
                        message='All fields are required' 
                    /> 
                : 
                    null
            }
            <SelectCoin />
            <SelectCryptocoin />
            <Button
                type="submit"
                value="Calculate"
            ></Button>
        </form>
    );
}
 
Form.propTypes = {
    saveCoin: PropTypes.func.isRequired,
    saveCryptocoin: PropTypes.func.isRequired
}

export default Form;