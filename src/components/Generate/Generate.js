import React, { useState } from 'react';
import Button from '../Button/Button';
import axios from 'axios';
import './Generate.css';

export default function Generator() {
  const [oneLine, setOneLine] = useState('');

  const getQuote = async () => {
    await axios
      .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then((response) => {
        setOneLine(response.data[0]);
      });
  };

  return (
    <>
      <h4 className='titlequote'>
        I'm a simple man. I like pretty, dark-haired women, and breakfast food.
      </h4>
      <h1 className='title'>-SWANSONisms-</h1>
      <p className='randomQuote'>{oneLine}</p>
      <Button generate={getQuote} />
    </>
  );
}
