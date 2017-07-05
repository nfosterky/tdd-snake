var { expect } = require('chai');
var SnakeSegment = require('../lib/SnakeSegment');

describe('SnakeSegment', function () {
  it('should have x, y, width, height', function () {
    var segment = new SnakeSegment(50, 50, 10, 10);

    expect(segment).to.deep.equal({
      x: 50,
      y: 50,
      width: 10,
      height: 10,
    })
  } )
})
