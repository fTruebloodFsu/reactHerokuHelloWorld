import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import resume from './FTResume.PNG';
import resumePDF from './Fletcher_Trueblood_Resume.pdf';

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

function DisplayResume(){
    return(
        <div className="resume">
            <iframe title="myResume" src={resumePDF} width="80%" height="1000"></iframe>
        </div>
    );
}

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
