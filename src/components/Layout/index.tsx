import React from 'react';
import Header from '../Header';

type Props = {
  children?: JSX.Element;
};

const Index = ({ children }: Props) => {
  return (
    <div data-testid="layout" className="container">
      <Header />
      <div className="main-contain">{children}</div>
    </div>
  );
};

export default Index;
