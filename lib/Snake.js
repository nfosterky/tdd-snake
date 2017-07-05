var SnakeSegment = require('./SnakeSegment')

module.exports = class Snake {
  constructor (length = 5) {
    this.segments = [];
    this.direction = {
      x: 1,
      y: 0
    };

    for (var i = 0; i < length; i++) {
      let size = 10;
      let x = i * size + i * 2;
      let y = 10;

      this.segments.push(new SnakeSegment(x, y, size, size));
    }
  }

  changeDirection (direction) {
    if (typeof direction === 'object') {
      this.direction = direction;
    }
  }

  // move('right')
  move () {
    // remove from front of array
    // find tail
    var tail = this.segments.shift();
    var oldHead = this.segments[this.segments.length - 1];

    // change tail x, y to equal the head x, y
    // add direction x, y to tail
    tail.x = oldHead.x + this.direction.x;
    tail.y = oldHead.y + this.direction.y;

    // move to end of array
    this.segments.push(tail);
  }


  // grow (length) {
  //   for (var i = 0; i < length; i++) {
  //     let size = 10;
  //     let x = i * size + i * 2;
  //     let y = 10;
  //
  //     this.segments.push(new SnakeSegment(x, y, size, size));
  //   }
  // }
}
