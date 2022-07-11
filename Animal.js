class Animal {
  constructor() {
    this.rank = 0
    this.name = ''
  }

  kill (obj) {
    return rank > obj?.rank || -1
  }

  getShortName () {
    return this.name.trim().split('')[0] || ''
  }
}

module.exports = Animal
