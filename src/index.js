import React from 'react';
import ReactDOM from 'react-dom';
import { GetData, Header } from './Components/';
import './index.css';

ReactDOM.render(
    <div>
        <Header title="Rails: issues" />
        <GetData />
    </div>,
  document.getElementById('root')
);