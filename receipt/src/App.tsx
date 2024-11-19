import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsonData from "./receipt1.json"
import Item from "./Item";

function App()
{
  var receipt = jsonData.receipt;
  return (
    <>
    {
      receipt.map(item => <Item item = {item}></Item>)
    }

    </>
  );

}



export default App;
