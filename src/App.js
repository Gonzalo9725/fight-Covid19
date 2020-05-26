import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
