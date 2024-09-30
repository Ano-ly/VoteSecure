import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import {
  Home,
  Login,
  Adminsignup,
  Sharedlayout,
} from './pages';

import './App.css';

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sharedlayout />}>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login />} />
            <Route path="adminsignup" element={<Adminsignup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
