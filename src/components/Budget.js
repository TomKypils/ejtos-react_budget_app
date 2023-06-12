import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleIncrease = () => {
    const newValue = parseInt(inputValue) + 10;

    dispatch({
        type: 'SET_BUDGET',
        payload: newValue,
    });
    setInputValue('');
  };

  const handleDecrease = () => {
    const newValue = parseInt(inputValue) - 10;

    dispatch({
        type: 'SET_BUDGET',
        payload: newValue,
    });
    setInputValue('');
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £{budget}</span>
      <div>
        <input type="number" step="10" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
};

export default Budget;

