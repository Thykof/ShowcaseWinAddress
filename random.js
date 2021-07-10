function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function getRandom(address) {
  address = address.slice(2)
  console.log(address);
  let number1 = address.slice(0, 5)
  let number2 = address.slice(5, 10)
  number1 = parseInt(number1, 16)
  number2 = parseInt(number2, 16)
  return getRandomIntInclusive(number1, number2)
}
