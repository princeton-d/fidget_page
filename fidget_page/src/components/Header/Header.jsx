import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/img/logo/logo.png';

const Header = () => {
  return (
    <>
      <header>
        <div>
          <Link to='/'>
            {/* <img src={require('../../public/img/logo/logo.png')} alt='logo' /> */}
            <img src={logo} alt='logo' />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
