import Header from '../Header/Index';

const Index = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="main-contain">{children}</div>
    </div>
  );
};

export default Index;
