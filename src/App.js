import React,{Suspense} from 'react';
import{Outlet} from 'react-router-dom';
import Header from './components/Header';
import First from './components/First';
import Solution from './components/Solution';
import Footer from './components/Footer';
import HowItWork from './components/HowItWork';
import Principles from './components/Principles';
import Partners from './components/Partners';
import About from './components/About';
import Answers from './components/Answers';

function App() {
  return (
    <Suspense >
      <div className="App">
        <Header />
        <First />
        <Solution />
        <HowItWork />
        <Principles/>
        <Partners />
        <About />
        <Answers />
        <Footer />
      </div>
      <Outlet />
    </Suspense>
  );
}

export default App;
