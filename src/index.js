import React from 'react';
import ReactDOM from 'react-dom';
import { Default, Issue } from './Components/';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ Default } />
        <Route path="/page/:number" component={ Default } />
        <Route path="/issue/:number" component={ Issue } />
    </Router>,
  document.getElementById('root')
);