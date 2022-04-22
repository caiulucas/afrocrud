import React from 'react';
import './styles.scss';

function InputBase({ label, placeholder, error, ...rest }, ref) {
  return (
    <label className="input">
      {label}:
      <input 
        type="text"        
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />

      {!!error && <span>{error.message}</span>}
    </label>
  );
}

export const Input = React.forwardRef(InputBase);