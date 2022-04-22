import React from 'react';
import './styles.scss';
 
function SelectBase({ ...rest }, ref) {
  return (
    <label className="select">
      Departamento:
      <select ref={ref} {...rest}>
        <option value="financeiro">Financeiro</option>
        <option value="marketing">Marketing</option>
      </select>
    </label>
  );
}

export const Select = React.forwardRef(SelectBase);