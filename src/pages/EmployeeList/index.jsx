import { useNavigate } from 'react-router-dom';

import './styles.scss';

import { Shape } from '../../components/Shape';
import { Button } from '../../components/Form/Button';

export function EmployeeList() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('create');
  }

  return (
    <Shape className="shape-list">
      <div className="title-area">
        <h2>Funcionários</h2>
        <Button onClick={handleNavigate} title="Criar novo" icon="plus" />
      </div>
    </Shape>
  )
}