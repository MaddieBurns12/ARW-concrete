// import logo from './logo.svg';
// import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Logo from './components/logo';
import Home from './pages/home'
import About from './pages/about';
import Careers from './pages/careers';
import Safety from './pages/safety';
import Services from './pages/services';

function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/about':
      component = <About />
      break
    case '/careers':
      component = <Careers />
      break
    case '/safety':
      component = <Safety />
      break
    case '/services':
      component = <Services />
      break
  
  }
  return (
    <div>
      <Logo />
      <Navbar />
      {component}
    </div>

  )
}

export default App;
