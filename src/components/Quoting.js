import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.div`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Price = styled.div`
    font-size: 30px;

    span {
        font-weight: bold;
    }
`;

const Quoting = ({result}) => {
    if(Object.keys(result).length === 0) return null;

    return (  
        <ResultDiv>
            <Price>The price is: <span>{result.PRICE}</span></Price>
            <Info>The max price is: <span>{result.HIGHDAY}</span></Info>
            <Info>The min price is: <span>{result.LOWDAY}</span></Info>
            <Info>Variation 24 hrs: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Last update: <span>{result.LASTUPDATE}</span></Info>

        </ResultDiv>
    );
}

Quoting.propTypes = {
    result: PropTypes.object.isRequired
}
 
export default Quoting;