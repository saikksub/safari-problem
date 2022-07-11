const random = require('random')
const prompt = require('prompt-sync')({
  sigint: true
})
const Safari = require('./Safari')

const WildAnimals = [Safari.Lion, Safari.Tiger, Safari.Wolf, Safari.Deer]

const runtime = {
  size: {
    row: 5,
    col: 5
  },
  board: [], 
  selection: {
    row: -1,
    col: -1
  },
  getRandom () {
    return random.int((min = 0), (max = 3)) 
  },
  randomizeBoard () {
    for (let row = 0; row < this.size.row; row++) {
      this.board[row] = []
      for (let col = 0; col < this.size.col; col++) {
        this.board[row][col] = new WildAnimals[this.getRandom()]
      }
    }
  },
  printBoard () {
    if (!this.board.length) {
      return
    }
    console.log('\n')
    this.board.forEach((row, rowIndex) => {
      row.forEach(col => {
        process.stdout.write(`${col.getShortName()} `)
      })
      console.log(` ${rowIndex + 1}`)
    })
    console.log('')
    for (let i = 0; i < this.size.row; i++) {
      process.stdout.write(`${i + 1} `)
    }
    console.log('\n')
  },
  selectCell () {
    let row = prompt('Select row: ')

    if (!(!isNaN(row) && (row = parseInt(row)) < this.size.row + 1 && row > 0)) {
      console.log(`Select row between 1 to ${this.size.row}\n\n`)
      return this.selectCell()
    }

    let col = prompt('Select col: ')
    console.log(col)
    if (!(!isNaN(col) && (col = parseInt(col)) < this.size.col + 1 && col > 0)) {
      console.log(`Select column between 1 to ${this.size.col}\n\n`)
      return this.selectCell()
    }
  },
  conquer () {}
}

runtime.randomizeBoard()
runtime.printBoard()
runtime.selectCell()

runtime.
