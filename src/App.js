import React, { Component } from 'react'

const App = (props) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <article>
      {props.children()}
    </article>
  </div>
)

export default App