import React from 'react';

const Index = ({ children }) => {
  return (
    <div className="container">
      <div className="side"></div>
      <div className="main-contain">{children}</div>
    </div>
  );
};

export default Index;
