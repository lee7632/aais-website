import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App.js';

var config = {
    apiKey: "AIzaSyA_4ihp7BIWYqX3L8xEFbD5rMgiE7Y5VUw",
    authDomain: "aggieaisociety-10084.firebaseapp.com",
    databaseURL: "https://aggieaisociety-10084.firebaseio.com",
    projectId: "aggieaisociety-10084",
    storageBucket: "aggieaisociety-10084.appspot.com",
    messagingSenderId: "116697526648"
};

firebase.initializeApp(config);


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
