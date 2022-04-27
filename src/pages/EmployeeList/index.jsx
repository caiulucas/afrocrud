import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import './styles.scss';

import { Shape } from '../../components/Shape';
import { Button } from '../../components/Form/Button';
import { Status } from '../../components/Table/Status';

export function EmployeeList() {  
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3333/employees');

      const result = await response.json();

      setEmployees(result);
    }

    fetchData();
  })

  function handleNavigate() {
    navigate('create');
  }

  return (
    <Shape className="shape-list">
      <div className="title-area">
        <h2>Funcionários</h2>
        <Button onClick={handleNavigate} title="Criar novo" icon="plus" />
      </div>

      <table>
        <thead>
          <tr>
            <th>Funcionários</th>
            <th>Departamento</th>
            <th>Salário</th>
            <th>Telefone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr>
              <td>
                <p>{employee.name}</p>
                <span>{employee.cpf}</span>
              </td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              <td>{employee.phoneNumber}</td>
              <td><Status isActive={employee.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Shape>
  )
}