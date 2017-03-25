function getRandom(data) {
  return data[Math.floor(Math.random() * data.length)];
}

export default getRandom;
