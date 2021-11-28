import './App.css';
import React from 'react';
import './App.css';
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Speed from './Speed/Speed';
import Passengers from './Passengers/Passengers';
import _template from './_template/_template';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <p>Welcome to Redux React</p>
      </header>
      <_template />
      <Speed/>
      <Passengers/>
    </div>
  );
}

export default App;
