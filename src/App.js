import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav-bar'>
          <h1>Friends Database</h1>
          <ul className='nav-list'>
            <li className='nav-list-item'>
              <Link to='/login'>Login.</Link>
            </li>
            <li className='nav-list-item'>
              <Link to='/friends'>Friendlist.</Link>
            </li>
            <li className='nav-list-item'>
              <Link to='/friends/add'>Addfriend.</Link>
            </li>
            <li className='nav-list-item'>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/friends/add' component={AddFriend} />
          <Route path='/friends' component={FriendsList} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
