function getDescr(obj) {
  const {
    name,
    special,
  } = obj;
  const {
    id,
    description = 'Описание недоступно',
    icon,
  } = special[0];
  return [{
    id,
    name,
    description,
    icon,
  }];
}

// eslint-disable-next-line import/prefer-default-export
export { getDescr };
