import React from 'react';

const CounterControl = ({ setCounter }) => {
  return (
    <>
      <button
        onClick={() => {
          // setState bisa nerima callback untuk mengakses previous state
          // https://blog.logrocket.com/accessing-previous-props-state-react-hooks/
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        Tambah Counter
      </button>
    </>
  );
};

export default CounterControl;
