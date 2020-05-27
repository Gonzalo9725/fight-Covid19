import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Register} />
            <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
