import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TestMobil = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Expensive logic

    navigate('/');
  };
  return (
    <div>
      <div>Ini Mobil</div>
      <Link to='/'>
        <button>Kembali ke page home</button>
      </Link>
      <div>
        <button onClick={handleClick}>Beli mobil</button>
      </div>
    </div>
  );
};

export default TestMobil;
