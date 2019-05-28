import { getDescr } from '../src/js/getDescr';

test('Test Object Destruction 01', () => {
  const sourceData = {
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

  const result = getDescr(sourceData);

  const expected = [
    {
      id: 8,
      name: 'Лучник',
      description: 'Двойной выстрел наносит двойной урон',
      icon: 'http://...',
    },
  ];

  expect(result).toEqual(expected);
});

test('Test Object Destruction 02', () => {
  const sourceData = {
    name: 'Программер',
    type: 'JavaScript',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 1,
        name: 'Дедлайн',
        icon: 'http://...',
      },
      { other: '...' },
    ],
  };

  const result = getDescr(sourceData);

  const expected = [
    {
      id: 1,
      name: 'Программер',
      description: 'Описание недоступно',
      icon: 'http://...',
    },
  ];

  expect(result).toEqual(expected);
});
