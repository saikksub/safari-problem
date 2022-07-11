const Animal = require('./Animal')

class Lion extends Animal {
  constructor() {
    super()
    this.rank = 3
    this.name = 'Lion'
  }
}

class Tiger extends Animal {
  constructor() {
    super()
    this.rank = 2
    this.name = 'Tiger'
  }
}

class Wolf extends Animal {
  constructor() {
    super()
    this.rank = 1
    this.name = 'Wolf'
  }
}

class Deer extends Animal {
  constructor() {
    super()
    this.name = 'Deer'
  }
}

module.exports = { Lion, Tiger, Wolf, Deer }
