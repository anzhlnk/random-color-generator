import chalk from 'chalk';
import randomColor from 'randomcolor';

let myColor = randomColor();
let colorAdapted = chalk.hex(myColor);

let hashRectangle = `###############################
###############################
###############################
####                       ####
####       ${myColor}         ####
####                       ####
###############################
###############################
###############################
`;

//let numOfRows = 9;
// let numOfColumns = 31;
// let hashRectangle = '';
// for (let i = 1; i <= numOfRows; i++) {
//   for (let j = 1; j <= numOfColumns; j++) {
//     hashRectangle += '#';
//   }
//   hashRectangle += '\n';
// }

if (process.argv.length === 4) {
  const lastIndex = process.argv.splice(2, 2);
  console.log(lastIndex);
  colorAdapted = chalk.hex(
    (myColor = randomColor({ luminosity: lastIndex[0], hue: lastIndex[1] })),
  );
  console.log(colorAdapted(hashRectangle));
} else if (process.argv.length === 3) {
  let lastIndex = process.argv.splice(2, 1);
  console.log(lastIndex);
  colorAdapted = chalk.hex((myColor = randomColor({ hue: lastIndex[0] })));
  console.log(colorAdapted(hashRectangle));
} else {
  console.log(colorAdapted(hashRectangle));
}
