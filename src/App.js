// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from 'react';
class App extends Component{
  render(){
    var myStyle = {
      fontsize:30,
      fontFamily:'Courier',
      color:'brown'

    }
    var myStyle2 = {
      fontsize:50,
      fontFamily:'italic',
      color:'green'
    }
    return(
      <div>
        <h1 style={myStyle}>Hello Everyone</h1>
        <h2 style={myStyle}>good morning</h2>
        <h1 style={myStyle2}>welcome to CGCS </h1>
      </div>

    );
  }
}


export default App;
