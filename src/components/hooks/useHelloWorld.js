import React, { useState } from 'react';

const useHelloWorld = (framework) => {
  const [counter, setCounter] = useState();
  const hello = () => {
    console.log('Hello' + framework);
  };
  return { hello, counter };
};

export default useHelloWorld;
