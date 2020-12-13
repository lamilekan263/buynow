import React from 'react'
import './Button.css'

const Button = ({ button, buttonType, btnClicked }) => {
  return (
    <div className={`shadow ${buttonType}`} onClick={btnClicked}>
      {button}
    </div>
  );
};

export default Button
