import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer/reducer'
import 'antd/dist/antd.css'
import App from './components/App'

const store = createStore(reducer)

const update = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

update()
store.subscribe(update)
