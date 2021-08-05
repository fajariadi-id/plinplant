import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import EncyclopediaPage from './pages/EncyclopediaPage';
import ShoppingPage from './pages/ShoppingPage';

import { Context } from './context/store';
import { getPlants } from './context/actions';

function App() {
  const { plantsDispatch } = useContext(Context);

  useEffect(() => {
    plantsDispatch(getPlants());
  }, [plantsDispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/ensiklopedia/:id/:name' component={EncyclopediaPage} />
        <Route path='/belanja/:id/:name' component={ShoppingPage} />
      </Switch>
    </Router>
  );
}

export default App;
