/* eslint-disable no-console */
// TODO: write code here
import { getDescr } from './getDescr';

console.log('app.js bundled');

const obj = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    { other: '...' },
  ],
};

console.log('Исходный объект:', obj);
console.log('Результат извлечения:');
getDescr(obj).forEach(element => console.table(element));
