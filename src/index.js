import React from 'react';
import ReactDOM from 'react-dom';
import { GetData, Header, List } from './Components/';
import './index.css';

ReactDOM.render(
    <div>
        <Header title="Rails: issues" />
        <GetData />
        <List items={[{
            text: 'alpha',
            key: 1
        }, {
            text: 'beta',
            key: 2
        }]} />
    </div>,
  document.getElementById('root')
);