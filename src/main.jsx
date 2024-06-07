import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo from './components/todo/todo'

// import Test from './components/test/test'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Todo />
    {/* <Test /> */}
  </React.StrictMode>,
)
