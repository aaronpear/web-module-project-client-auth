import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <div className='nav-bar'>
          <h1>Friends Database</h1>
          <ul className='nav-list'>
            { isLoggedIn && 
              <li className='nav-list-item'>
                <Link to='/friends'>Friendlist.</Link>
              </li>
            }
            { isLoggedIn && 
              <li className='nav-list-item'>
                <Link to='/friends/add'>Addfriend.</Link>
              </li>
            }
            { isLoggedIn && 
              <li className='nav-list-item'>
                <Link to='/logout'>Logout</Link>
              </li>
            }
            { !isLoggedIn &&
              <li className='nav-list-item'>
                <Link to='/login'>Login.</Link>
              </li>
            }
          </ul>
        </div>
        <Switch>
          <PrivateRoute path='/logout' component={Logout} />
          <PrivateRoute path='/friends/add' component={AddFriend} />
          <PrivateRoute path='/friends' component={FriendsList} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
