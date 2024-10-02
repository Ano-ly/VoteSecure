import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import {
  Home,
  Login,
  Adminsignup,
  Sharedlayout,
  Voterlogin
} from './pages';

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sharedlayout />}>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login />} />
            <Route path="adminsignup" element={<Adminsignup />} />
            <Route path='voterlogin' element={<Voterlogin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
