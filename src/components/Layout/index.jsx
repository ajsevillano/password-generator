import Header from '../Header';

const Index = ({ children }) => {
  return (
    <div data-testid="layout" className="container">
      <Header />
      <div className="main-contain">{children}</div>
    </div>
  );
};

export default Index;
