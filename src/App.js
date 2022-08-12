import { useState } from 'react';
import './App.css';
import './css/custom.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CounterControl from './components/CounterControl';
import CounterView from './components/CounterView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestMobil from './components/TestMobil/TestMobil';
import MainLayout from './components/Layout/MainLayout';
import WithAxiosFunc from './components/Fetch/WithAxiosFunctional';
const Home = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <MainLayout>
        <CounterView counter={counter} />
        <CounterControl setCounter={setCounter} />
      </MainLayout>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contoh-fetch' element={<WithAxiosFunc />} />
          <Route path='/test-mobil' element={<TestMobil />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
