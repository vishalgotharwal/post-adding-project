import React from 'react'
import LogoImage from './Header/image.png'

function Logo({ width = '100px', rounded = 'rounded-3xl' }) {
  return (
    <img src={LogoImage} alt="Logo" className={`${rounded}`} style={{ width }} />
  );
}

export default Logo;