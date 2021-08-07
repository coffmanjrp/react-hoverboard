const getRandomElement = (el) => {
  return el[Math.floor(Math.random() * el.length)];
};

export default getRandomElement;
