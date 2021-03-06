import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import HabitHistory from './components/HabitHistory.jsx';
import HabitCreator from './components/HabitCreator.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Routes>
            <Route path= '/' element = {<Login/>}></Route>
            <Route path= '/signup' element = {<Signup/>}></Route>
            <Route path= '/dashboard' element = {<Dashboard/>}></Route>
            <Route path= '/history' element = {<HabitHistory/>}></Route>
            <Route path= '/creator' element = {<HabitCreator/>}></Route>
          </Routes>
      </div>
    );
  }
}
export default App;