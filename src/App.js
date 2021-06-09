import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Home from './components/Pages/Home'
import Login from './components/auth/Login';
import Signup from './components/auth/SignUp'
import My404 from './components/Pages/My404'
import NewCar from './components/AdminPages/NewCar'
import ViewPages from './components/Pages/ViewPages';
import PostCarForm from './components/Pages/PostCarForm';
import AdminDashboard from './components/Pages/AdminDashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/sign-up' component={Signup}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/upload-car' component={NewCar}></Route>
        <Route exact path='/id/toyota' component={ViewPages}></Route>
        <Route exact path='/post-car' component={PostCarForm}></Route>
        <Route exact path='/admin-dashboard' component={AdminDashboard}></Route>

        <Route path='*' exact={true} component={My404} />
      </Switch>
    </Router>
  );
}

export default App;
