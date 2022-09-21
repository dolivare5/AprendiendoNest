import './style.css'
//import {charmander} from "./bases/05-decorators";
//import { name, age } from './bases/01-types';
//import { charmander } from './bases/04-injection';
//import { charmander } from './bases/05-decorators';
import { charmander } from './bases/06-decorators2';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
    </a>
    <h1>Hola ${charmander} !!!!</h1>
  </div>
`;