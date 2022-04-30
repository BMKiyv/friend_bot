import React,{Suspense} from 'react';
import{Routes,Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from './pages/Home';
import Conditions from './pages/Conditions';
import Main from './layout/Main'
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';


function App() {
  const customHistory = createBrowserHistory();
  // let path = customHistory
  return (
    <Suspense fallback={<div className='loading'>Завантажуємось...</div>}>
 
         <Routes history = {customHistory}> 
         <Route path = '/' element = {<Main />} >
            <Route  path = '/' element = {<Home />} />
            <Route path='/conditions' exact  element ={<Conditions />} />
            <Route path='/contacts' exact element = {<Contacts />} /> 
            <Route path = '*' element = {<NotFound />} />
          </Route> 
        </Routes>
    </Suspense>
  );
}

export default App;
