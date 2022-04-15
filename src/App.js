import React,{Suspense} from 'react';
import{Outlet} from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';

function App() {
  return (
    <Suspense >
      <div className="App">
        <Header />
        <Content/>
        <Footer />
      </div>
      <Outlet />
    </Suspense>
  );
}

export default App;
