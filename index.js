const random = require('random')
const prompt = require('prompt-sync')({
  sigint: true
})
const Safari = require('./Safari')
const conquer = require('./conquer')

const WildAnimals = [Safari.Lion, Safari.Tiger, Safari.Wolf, Safari.Deer]

const selection = {
  row: -1,
  col: -1
}

const runtime = {
  size: {
    row: 10,
    col: 10
  },
  board: [], 
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

    selection.row = row - 1
    selection.col = col - 1
  },
  conquer
}

async function main () {
  runtime.randomizeBoard()
  runtime.printBoard()

  runtime.selectCell()

  if (selection.row < 0 || selection.col < 0) {
    runtime.printBoard()
    return
  }
  
  const hunter = runtime.board[selection.row][selection.col]
  const prevPosition = selection

  runtime.conquer(
    runtime,
    selection,
    prevPosition,
    hunter
  )
  runtime.printBoard()
}

main()
