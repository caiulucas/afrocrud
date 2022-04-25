import { useForm } from 'react-hook-form';

import './styles/global.scss';
import './styles/app.scss';

import { Shape } from './components/Shape';
import { Input } from './components/Form/Input';
import { RadioButton } from './components/Form/RadioButton';
import { FormArea } from './components/Form/FormArea';
import { Checkbox } from './components/Form/Checkbox';
import { Select } from './components/Form/Select';
import { Button } from './components/Form/Button';

import { phoneNumberMask, cpfMask, currencyMask, nameMask } from './utils/masks';

export function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <header>
        <h1>afro<span>crud</span></h1>
      </header>

      <Shape>
        <h2>Criar funcionário</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid-form">
            <Input 
              label="Nome"
              mask={nameMask}
              placeholder="Preencha o nome do funcionário"
              error={errors.name}
              {...register('name', { required: 'O nome é obrigatório' })}
            />

            <div className="form-areas">
              <FormArea label="Sexo">
                <RadioButton 
                  title="Masculino"
                  value="male"
                  defaultChecked
                  {...register('gender')}
                />
                <RadioButton
                  title="Feminino"
                  value="female"
                  {...register('gender')}
                />  
              </FormArea>

              <FormArea label="Status">
                <Checkbox title="Ativo" {...register('status')}/>
              </FormArea>
            </div>

            <Input 
              label="CPF"
              placeholder="Preencha o CPF do funcionário"
              maxLength={14}
              mask={cpfMask}
              error={errors.cpf}
              {...register('cpf', {
                required: 'O CPF é obrigatório', 
                minLength: { value: 14, message: 'Preencha o CPF corretamente' }
              })}
            />
            <Input 
              label="Telefone"
              placeholder="Preencha o telefone do funcionário"
              maxLength={15}
              mask={phoneNumberMask}
              error={errors.phoneNumber}
              {...register('phoneNumber', {
                required: 'O número de telefone é obrigatório',
                minLength: { 
                  value: 15, 
                  message: 'Preencha o número de telefone corretamente'
                }
              })}
            />
            <Input 
              label="Salário" 
              placeholder="Preencha o salário do funcionário"
              error={errors.salary}
              mask={currencyMask}
              defaultValue="R$ 0,00"
              {...register('salary', { required: 'O salário é obrigatório'})}
            />

            <Select {...register('department')}/>
          </div>

          <Button title="Adicionar" icon="arrowRight"/>          
          
        </form>
      </Shape>
    </>
  );
}
