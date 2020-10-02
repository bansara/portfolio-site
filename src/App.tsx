import React from 'react';
import Navbar from './components/Nav/navbar';
// import Contact from './components/Contact/contact';
import Projects from './components/Portfolio/projects';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme';
import './app.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Projects />
          {/* <Contact /> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
