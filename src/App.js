import React, {useState, useEffect} from 'react';
import './App.css';
import Login from "./Components/Login"
import Signup from './Components/Signup';
import Home from './containers/Home';
import { BrowserRouter as Router} from "react-router-dom"
import {Route, Switch} from "react-router-dom"
import Welcome from './Components/Welcome'
import family_container from './containers/family_container';
import {fetchUsers} from './Actions/fetchUser'
import {connect} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import NavBar from './containers/NavBar';







function App(props) {
  const [logIn, setLogin] = useState(false)
  // console.log("this is it", props)
  !localStorage.getItem("token") ? console.log('null') : props.dispatch(fetchUsers())
  return (
    <Router>
      <div className="App">
        {!localStorage.token ? null : <NavBar setLogin={setLogin} style={{alignSelf: "stretch"}}/>}
      <Switch>
        <Route path='/' exact component={Welcome}></Route> 
        <Route path='/Home' exact component={Home}></Route>
        <Route path='/MyFamily' exact component={family_container}></Route>
        <Route exact path='/Login' render={ () => <Login setLogin={setLogin}/>} />
        <Route path='/Signup' exact component={Signup}></Route>
      </Switch>
      </div>

    </Router>
    
  );
}

export default connect() (App);
