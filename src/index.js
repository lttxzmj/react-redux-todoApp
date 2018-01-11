<<<<<<< HEAD
import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';

render(
  <App /> ,
=======
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app.jsx'
import todoApp from './reducers/index'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
>>>>>>> master
  document.getElementById('root')
  )
