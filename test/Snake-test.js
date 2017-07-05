var { expect } = require('chai');
var Snake = require('../lib/Snake');

describe('Snake', function () {
  let snake;

  beforeEach(function () {
    snake = new Snake();
  })

  it('should default to having 5 segments', function () {
    expect(snake.segments.length).to.equal(5);
  } )

  it('segment x coords should be 12 px apart', function () {
    expect(snake.segments[0].x).to.equal(0);
    expect(snake.segments[1].x).to.equal(12);
    expect(snake.segments[2].x).to.equal(24);
    expect(snake.segments[3].x).to.equal(36);
    expect(snake.segments[4].x).to.equal(48);
  })

  it('should have a direction', function () {
    expect(snake.direction).to.deep.equal({
      x: 1,
      y: 0
    })
  })

  it('should be able to change direction', function () {
    expect(snake.direction).to.deep.equal({ x: 1, y: 0 })

    snake.changeDirection({ x: 0, y: 1 });

    expect(snake.direction).to.deep.equal({ x: 0, y: 1 })
  })

  it('should be able to move down', function () {
    var head = snake.segments[snake.segments.length - 1];

    expect(head).to.deep.equal({ x: 48, y: 10, height: 10, width: 10 })

    snake.changeDirection({ x: 0, y: 1 });
    snake.move();

    var newHead = snake.segments[snake.segments.length - 1];

    expect(newHead).to.deep.equal({ x: 48, y: 11, height: 10, width: 10 })

  })

  // it('should grow by passed in number', function () {
  //   expect(snake.segments.length).to.equal(5);
  //
  //   snake.grow(1);
  //
  //   expect(snake.segments.length).to.equal(6);
  // })
  //
  // it('should place new segments at tail position', function () {
  //   var tail = snake.segments[0];
  //
  //   snake.grow(1);
  //
  //
  //   var newSegment = snake.segments[snake.segments.length - 1];
  //
  //   expect(tail.x).to.equal(newSegment.x);
  //   expect(tail.y).to.equal(newSegment.y);
  // })
})
