import React from 'react'
// import logo from './logo.svg';
// import './App.css';
// import List from './pages/manage/List'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'

function App() {
  return (
    // <div className="App">
      <RouterProvider router={routerConfig} />
      // {/* <h1 style={{ backgroundColor: 'yellow' }}>wenjuan-fe</h1>
      // <List /> */}
      // {/* <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.tsx</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> */}
    // </div>
  )
}

export default App
