import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import FrontEndPractice from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<FrontEndPractice />, document.getElementById('root'));

serviceWorker.unregister();
