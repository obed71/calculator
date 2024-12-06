import './style.css';
import { calculate } from './evaluate';

const inputEl = document.querySelector('.input');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
  alert(calculate(inputEl.value));
});
