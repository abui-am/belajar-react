import React from 'react';
import { useParams } from 'react-router';

const BelajarFramework = () => {
  const param = useParams();
  return (
    <div>
      Belajar {param.id} {param.framework}
    </div>
  );
};

export default BelajarFramework;
