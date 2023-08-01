import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tracker.css'

function Tracker() {
  const [value, setValue] = useState(0);
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

  const handleRemove = () => {
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
    <div className='container'>
        <div className=' content'>
      <h1>Balance: {balance}</h1>
      <TextField
      id='outlined-basic'
      variant='outlined'
      label='Amount'
        type="number"
        size='small'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      /><br/>
      <br/>

      <Button
      color='primary'
      variant='contained'
      size='small'
      onClick={handleAdd}>Add</Button>
      <Button
      color='primary'
      variant='contained'
      size='small'
      onClick={handleRemove}>Remove</Button>
      </div>
      <div className='content2'>
        <h2>Transaction</h2>
        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {expenses.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.time}</TableCell>
              <TableCell>{transaction.value}</TableCell>
              <TableCell>{transaction.action}</TableCell>
            </TableRow>
          ))}
            </TableBody>
        </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Tracker;
