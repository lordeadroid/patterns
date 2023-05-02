const repeat = function(character) {
  return function(times) {
    return character.repeat(times);
  }
}

const stars = repeat("*");
const spaces = repeat(" ");
const dashes = repeat("-");

const lineWidth = function(height, width) {
  const lines = [];

  for(let index = 0; index < height; index++){
    lines.push([width]);
  }

  return lines;
};

const applyStyle = function(style, lineWidth) {
  return lineWidth.map(style);
};

const applyStyleGroups = function(styles, lineWidthGroups) {
  return styles.flatMap(function(style, index) {
    return applyStyle(style, lineWidthGroups[index]);
  });
};

const rectangle = function(height, width) {
  return applyStyle(stars, lineWidth(height, width));
};

const hollowLine = function(width) {
  return stars(1) + spaces(width - 2) + stars(1);
};

const hollowRectangle = function(height, width) {
  const lines = [lineWidth(1, width), lineWidth(height - 2, width), lineWidth(1, width)];

  return applyStyleGroups([stars, hollowLine, stars], lines); 
};

const linesPattern = function(height) {
  const styles = [stars, dashes];
  const designs = [];

  for(let index = 0; index < height; index++) {
    designs.push(styles[index % styles.length]);
  }

  return designs;
};

const alternateRectangle = function(height, width) {
  const linesDesigns = linesPattern(height);
  const lines = lineWidth(height, width);

  return applyStyleGroups(linesDesigns, lines);
};

const trianglesWidth = function(height) {
  const lines = [];

  for(let index = 1; index <= height; index++){
    lines.push([index]);
  }

  return lines;
};

const triangle = function(height) {
  return applyStyle(stars, trianglesWidth(height));
};

exports.triangle = triangle;
exports.rectangle = rectangle;
exports.hollowRectangle = hollowRectangle;
exports.alternateRectangle = alternateRectangle;
