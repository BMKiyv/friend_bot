import React,{Suspense} from 'react';
import{Routes,Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from './pages/Home';
import Conditions from './pages/Conditions';
import Main from './layout/Main'


function App() {
  const customHistory = createBrowserHistory();
  // let path = customHistory
  return (
    <Suspense fallback='Завантажуємось...'>
 
         <Routes history = {customHistory}> 
         <Route path = '/' element = {<Main />} >
            <Route  path = '/' element = {<Home />} />
            <Route path="/conditions" exact  element ={<Conditions />} />
          </Route> 
          {/* <Route path = '/ru' element = {<Main path = {path}/>} >
            <Route  path = '/ru' element = {<Home />} />
            <Route path="/ru/conditions" exact  element ={<Conditions />} /> 
          </Route>  */}
        </Routes>
    </Suspense>
  );
}

export default App;
