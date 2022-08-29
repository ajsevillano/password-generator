//Components
import Title from '../Title';

//Lottie animation helper and json import
import Lottie from 'lottie-react';
import lock from '../../assets/lock.json';

const Header = () => {
  return (
    <div className="header" data-testid="header">
      <div className="lottie-animation">
        <Lottie data-testid="animation" animationData={lock} />
      </div>

      <Title />
    </div>
  );
};

export default Header;
