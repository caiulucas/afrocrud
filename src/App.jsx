import './styles/global.scss';
import './styles/app.scss';

import { Shape } from './components/Shape';

export function App() {
  return (
    <>
      <header>
        <h1>afro<span>crud</span></h1>
      </header>

      <Shape>
        <h2>Criar funcionário</h2>
				
        <form>
          <label className="input">
	    Nome:
	    <input type="text" placeholder="Preencha o nome do funcionário" />
	  </label>
        </form>
      </Shape>
    </>
  )
}
