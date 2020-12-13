import React from 'react'
import './Input.css'

const Input = ({ type, placeholder, value, onChangeValue }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeValue}
      className="inputBar"
    />
  );
};

export default Input
