import logo from './logo.svg';
import './App.css';
import React from 'react'
import Hello from "./components/hello/hello";
import Welcome from "./components/Welcome";
class App extends React.Component{
  render(){
    return (
        <div className="App">
          <Hello/>
          <Welcome></Welcome>
        </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <span>你好aa</span>
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

export default App;
