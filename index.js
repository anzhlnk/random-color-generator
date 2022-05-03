import chalk from 'chalk';
import randomColor from 'randomcolor';

let numOfRows = 9;
let numOfColumns = 31;
let hashRectangle = '';
for (let i = 1; i <= numOfRows; i++) {
  for (let j = 1; j <= numOfColumns; j++) {
    hashRectangle += '#';
  }
  hashRectangle += '\n';
}

const colorAdapted = chalk.hex(randomColor());

if (process.argv.length === 4) {
  const lastIndex = process.argv.splice(2, 2);
  console.log(lastIndex);
  let colorChosen = chalk.hex(
    randomColor({ luminosity: lastIndex[0], hue: lastIndex[1] }),
  );
  console.log(colorChosen(hashRectangle));
} else if (process.argv.length === 3) {
  let lastIndex = process.argv.splice(2, 1);
  console.log(lastIndex);
  const colorChosen = chalk.hex(randomColor({ hue: lastIndex[0] }));
  console.log(colorChosen(hashRectangle));
} else {
  console.log(colorAdapted(hashRectangle));
}
console.log(hashRectangle.length);
