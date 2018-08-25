import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './containers/Home';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

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
    <Home />
    , document.getElementById('root'));
registerServiceWorker();
