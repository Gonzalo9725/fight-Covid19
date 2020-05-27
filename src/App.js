import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/home' component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
