import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 id='title' className='text-title'>
        Dengan Layout
      </h1>
      {children}
    </div>
  );
};

export default MainLayout;
