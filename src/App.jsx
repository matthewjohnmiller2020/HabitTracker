import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path= '/' element = {<Login/>}></Route>
            <Route path= '/signup' element = {<Signup/>}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;