import React from 'react';
import Experience from './LeftContent';
import Education from './RightContent';
import './header.scss';
function Header() {
  return (
   <>
    <header>
      <h1>Bùi Minh Hoàng</h1>
      <p>fresher react native</p>

    </header>
    <div className='content'>
      <Experience/>
      <Education/>
    </div>

   </>

  );
}

export default Header;
