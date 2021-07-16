import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from './state';
import { bindActionCreators } from 'redux';


function App() {

  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney, bankruptMoney} = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <br/>
      <br/>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <br/>
      <br/>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  );
} 

export default App;
