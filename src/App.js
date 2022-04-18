import React from 'react';
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import {Navbar,Footer} from './components';
import { Pricing,InfoSection } from './components';

function App() {
  return (
    <Router>
    <GlobalStyle />
    <Navbar />
    <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/Pricing' exact component={Pricing} />
    <Route path='/InfoSection' exact component={InfoSection} />
    <Route path='/' exact component={Home} />
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
