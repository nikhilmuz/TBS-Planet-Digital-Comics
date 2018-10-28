import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style'
import 'antd/dist/antd.css';
import './index.css'
import RootComponent from './tbs/root';

export const URL = 'http://localhost:8000'
ReactDOM.render(<RootComponent />, document.getElementById('tbs'));