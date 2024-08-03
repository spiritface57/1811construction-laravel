// components/Loading/Loading.js
import React from 'react';
import { DotLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <DotLoader color="#ffb800" loading={true} />
    </div>
  );
};

export default Loading;
