import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header'
import RecordPage from './components/RecordPage';
import ReportPage from './components/ReportPage';
import FiltersPage from './components/FiltersPage';

ReactDOM.render((
    <BrowserRouter>
        <div className="page">
            <Header/>
            <Route exact path="/" component={App}/>
            <Route path="/record" component={RecordPage}/>
            <Route path="/report" component={ReportPage}/>
            <Route path="/filters" component={FiltersPage}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
