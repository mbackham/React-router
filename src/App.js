import React from 'react';
import IndexCom from './pages'
import ListCom from './pages/list'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function AppRouter() {
  return (
    <Router>
    <ul>
      <li>
        <Link to='/'>
        首页
        </Link>
        <Link to='/list/'>
        首页
        </Link>
      </li>
    </ul>
    <Route path='/' exact component={IndexCom}></Route>
    <Route path='/list/' exact component={ListCom}></Route>

    </Router>
  );
}

export default AppRouter;
