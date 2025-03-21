export default (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};
