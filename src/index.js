import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Effects from './Effects';
import Ref from './Ref';
import Memos from './Memos';
import Context from './Context';
import  Reducer  from './Reducer';
import ReducerTodos from './ReducerTodos';
import Callback from './CallBackSExm';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

<Routes>
    <Route exact path="/" element={<App/>}/>
    <Route exact path="/effects" element={<Effects/>}/>
    <Route exact path="/memos" element={<Memos/>}/>
    <Route exact path="/ref" element={<Ref/>}/>
    <Route exact path="/context" element={<Context/>}/> 

     <Route exact path="/reducer" element={<Reducer/>} />  
     <Route exact path="/reducer_todos" element={<ReducerTodos/>} /> 
     <Route exact path="/callbacks" element={<Callback/>} />  
  </Routes>
</BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
