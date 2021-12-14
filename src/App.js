import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav-bar'>
          <h1>Friends Database</h1>
          <ul>
            <li>
              <Link to='/login'>Login.</Link>
            </li>
            <li>Friendlist.</li>
            <li>Addfriend.</li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
