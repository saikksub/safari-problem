class Animal {
  constructor() {
    this.rank = 0
    this.name = ''
  }

  #dead = false

  canKilled (rank) {
    return rank >= this.rank
  }

  kill (rank) {
    return this.canKilled(rank) ? this.#dead = true : false
  }

  isDead () {
    return this.#dead
  }

  getShortName () {
    return this.#dead ? '_' : this.name.trim().split('')[0] || ''
  }
}

module.exports = Animal
