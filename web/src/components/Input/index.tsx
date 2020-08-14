import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  complement?: string;
}

const Input: React.FC<Props> = ({ name, label, complement, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label} { complement && <p>{complement}</p> }</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;
