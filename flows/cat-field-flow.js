var renderCatField = require('../dom/render-cat-field');
var probable = require('probable');

const boardWidth = 100;
const boardHeight = 100;

var figureTable = probable.createTableFromSizes([
  [2, ['wily-overhead.png']],
  [2, ['bonus-overhead.png']],
  [1, ['wily-overhead.png', 'bonus-overhead.png']]
]);

var fieldsTable = probable.createTableFromSizes([
  [5, ['solid']]
]);

function catFieldFlow() {
  var figures = figureTable.roll();
  //var fieldTypes = fieldsTable.roll();
  var fields = ['solid', 'solid'].map(fieldForType);
  // todo: Fix probable's issues with returning single-element arrays.
  renderCatField({ figures: [figures], fields });
}

function fieldForType(fieldType, i) {
  if (fieldType === 'solid') {
    return { x: i * boardWidth/2, width: boardWidth/2, height: boardHeight, color: `hsl(${probable.roll(360)}, 50%, 50%)` };
  }
}

module.exports = catFieldFlow;
