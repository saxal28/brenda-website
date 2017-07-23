import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import "./sass/App.css";

import { HashRouter } from "react-router-dom";
import {App} from "./react/App";

ReactDOM.render(<HashRouter><App/></HashRouter>,
	document.getElementById('root'));
registerServiceWorker();