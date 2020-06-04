import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './cryptocoins.png';
import Form from './components/Form';
import Quoting from './components/Quoting';
import axios from 'axios';
import Spinner from './components/Spinner'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [coin, saveCoin] = useState('');
  const [cryptocoin, saveCryptocoin] = useState('');
  const [result, saveResult] = useState({});
  const [loading, saveLoading] = useState(false);


  useEffect( () => {

    const calculateCryptocoin = async () => {
      if (coin === '') return;    
      
      // Call API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocoin}&tsyms=${coin}`;
      
      const result = await axios.get(url);
  
      // Show Spinner
      saveLoading(true);

      // Hide Spinner & show result
      setTimeout( () => {

        saveLoading(false);

        saveResult(result.data.DISPLAY[cryptocoin][coin]);

      }, 2000);
    }

    calculateCryptocoin();

  }, [ coin, cryptocoin ]);

  // Show Spinner or result
  const component = (loading) 
    ? 
      <Spinner /> 
    :
    <Quoting
      result={result}
    />
  ; 

  return (
    <Container>
      <div>
        <Image 
          src={image}
          alt="crypto image"
        />
      </div>
      <div>
        <Heading>Cryptocoin Calculator</Heading>
        <Form 
          saveCoin={saveCoin}
          saveCryptocoin={saveCryptocoin}
        />
        
        {component}
      
      </div>
    </Container>
    
  );
}

export default App;
