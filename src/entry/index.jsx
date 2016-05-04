import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

//allow react dev tools work
window.React = React;//我试过，竟然没有用
ReactDOM.render(<App />, document.getElementById('react-content'));
