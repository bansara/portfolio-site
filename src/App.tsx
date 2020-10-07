import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Nav/navbar';
import Contact from './components/Contact/contact';
import Projects from './components/Portfolio/projects';
import About from './components/About/about';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme';
import './app.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
              <Switch>
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/music' render={()=><h1>Music</h1>} />
                <Route path='/contact' component={Contact} />
                <Redirect to='/' />
              </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
