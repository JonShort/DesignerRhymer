function random(data) {
  return data[Math.floor(Math.random() * data.length)];
}

function preventSame(data, last) {
  let value = random(data);

  while (last === value) {
    value = random(data);
  }
  return value;
}

let lastColor;
let lastQuote;

function getRandom(data, type) {
  if (type.toUpperCase() === 'COLOR') {
    lastColor = preventSame(data, lastColor);
    return lastColor;
  }

  if (type.toUpperCase() === 'QUOTE') {
    lastQuote = preventSame(data, lastQuote);
    return lastQuote;
  }

  return null;
}

export default getRandom;
