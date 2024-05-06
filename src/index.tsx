import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './helpers/styles/main.css'

import Home from "./pages/home/home"
import Login from "./pages/login/login"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
);
