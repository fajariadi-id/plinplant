import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';
import ArticleCMS from './pages/cms/ArticleCMS';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/articles' component={ArticlePage} />

        <Route path='/cms/articles' component={ArticleCMS} />
      </Switch>
    </Router>
  );
}

export default App;
