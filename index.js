import chalk from 'chalk';
import randomColor from 'randomcolor';

function drawHashRectangle(color) {
  return `###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################
  `;
}

if (process.argv.length === 4) {
  const lastIndex = process.argv.splice(2, 2);
  const myColor = randomColor({ luminosity: lastIndex[1], hue: lastIndex[0] });
  const blackAndWhiteHashRectangle = drawHashRectangle(myColor); // output string with hex color code, but still black and white
  const coloredHashRectangle = chalk.hex(myColor)(blackAndWhiteHashRectangle);
  console.log(coloredHashRectangle);
} else if (process.argv.length === 3) {
  const lastIndex = process.argv.splice(2, 1);
  const myColor = randomColor({ hue: lastIndex[0] });
  const blackAndWhiteHashRectangle = drawHashRectangle(myColor);
  const coloredHashRectangle = chalk.hex(myColor)(blackAndWhiteHashRectangle);
  console.log(coloredHashRectangle);
} else {
  const myColor = randomColor();
  const blackAndWhiteHashRectangle = drawHashRectangle(myColor);
  const coloredHashRectangle = chalk.hex(myColor)(blackAndWhiteHashRectangle);
  console.log(coloredHashRectangle);
}
