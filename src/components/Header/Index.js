import Title from '../Title/Index';

//Lottie animation helper and json import
import LottieAnimation from '../../utils/Lottie';
import * as lock from '../../assets/lock.json';

const Header = () => {
  return (
    <div className="header">
      <div className="lottie-animation">
        <LottieAnimation animationName={lock} />
      </div>

      <Title />
    </div>
  );
};

export default Header;
