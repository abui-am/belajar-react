import { useState } from 'react';
import './App.css';
import './css/custom.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CounterControl from './components/CounterControl';
import CounterView from './components/CounterView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestMobil from './components/TestMobil/TestMobil';
import MainLayout from './components/Layout/MainLayout';
import WithAxios from './components/Fetch/WithAxios';
import FileHandling from './components/FileHandling/FileHandling';
import Lifecycle from './components/Lifecycle/LifecycleFunctional';
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
          <Route path='/file-handling' element={<FileHandling />} />
          <Route path='/lifecycle' element={<Lifecycle />} />
          <Route path='/contoh-fetch' element={<WithAxios />} />
          <Route path='/test-mobil' element={<TestMobil />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
