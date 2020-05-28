import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/home' component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
