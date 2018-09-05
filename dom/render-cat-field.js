var d3 = require('d3-selection');
require('d3-transition');
var fieldRoot = d3.select('.fields');
var figuresRoot = d3.select('.figures');
var board = d3.select('.board');
var accessor = require('accessor')();

// This module assumes: viewBox="0 0 100 100"
function renderCatField({ figures, fields }) {
  var width = +window.innerWidth;
  var height = +window.innerHeight;

  if (height < width) {
    // Keep things at least as tall as they are wide.
    height = width;
  }

  board.attr('width', width);
  board.attr('height', height);

  var fieldEls = fieldRoot.selectAll('.field').data(fields);
  fieldEls.exit().remove();
  fieldEls.enter().append('rect').classed('field', true)
    .merge(fieldEls)
    .attr('fill', accessor('color'))
    .attr('x', accessor('x'))
    .attr('y', 0)
    .attr('width', accessor('width'))
    .attr('height', accessor('height'));

  var figureEls = figuresRoot.selectAll('.figure').data(figures);
  figureEls.enter().append('image').classed('figure', true)
    .merge(figureEls)
    .attr('xlink:href', filename => `static/${filename}`)
    .attr('x', ~~(Math.random() * 90))
    .attr('y', ~~(Math.random() * 90))
    .attr('width', 10)
    .attr('height', 10);
}

module.exports = renderCatField;
