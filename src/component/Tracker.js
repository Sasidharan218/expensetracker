import React, { useState } from 'react';

function Tracker() {
  const [value, setValue] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [balance,setBalance] = useState(0)

  const handleAdd = () => {
    const newTransaction = {
      time: new Date().toISOString(),
      action: 'Add',
      value: value,
    };
    setExpenses([newTransaction, ...expenses]);
    setBalance(balance + + value)
    setValue(0)
  };

  const handleRemove = (locale, options, time) => {
    const newTransaction = {
      time: new Date().toISOString(),
      action: 'Remove',
      value: value,
    };
    setExpenses([newTransaction, ...expenses]);
    setBalance(balance - value)
    setValue(0)
  };

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      /><br/><br/>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <div>
        <h2>Transaction</h2>
        <div>
          {expenses.map((transaction, index) => (
            <p key={index}>
              {transaction.time} - {transaction.action} -{transaction.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tracker;
