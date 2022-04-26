import './styles/global.scss';
import './styles/app.scss';

import { Router } from './routes';

export function App() {
  return (
    <>
      <header>
        <h1>afro<span>crud</span></h1>
      </header>

      <Router />
    </>
  );
}
