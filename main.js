const urlParams = new URLSearchParams(location.search);

let winnerAddress;

for (const [key, value] of urlParams) {
  if (key === 'winner') {
    winnerAddress = value
  }
}

if (winnerAddress === undefined) {
  console.error("bad query");
} else {
  let r = getRandom(winnerAddress)
  console.log(r);
}
