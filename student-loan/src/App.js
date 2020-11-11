import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Navbar/navbar'
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} ></Route>
        </Switch>
      </Router>
    )
  }
}
//123

export default App;
