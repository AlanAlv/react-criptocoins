import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCryptocoin = (label, initialState, options ) => {
    //console.log(options);

    // Custom hook state
    const [ state, updateState ] = useState(initialState);

    const SelectCryptocoin = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => updateState(e.target.value)}
                value={state}
            >
                <option value="">-- Select --</option>
                {options.map(option => (
                    <option 
                        key={option.CoinInfo.Id} 
                        value={option.CoinInfo.Name}
                    >
                        {option.CoinInfo.FullName}
                    </option>
                ))}
            </Select>
        </Fragment>
    )

    // Return state, interface and func to modify state
    return [state, SelectCryptocoin, updateState];
}

useCryptocoin.propTypes = {
    label: PropTypes.string.isRequired,
    initialState: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}

export default useCryptocoin;