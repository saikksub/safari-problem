function conquer (runtime, position, prevPosition, hunter) {
  if (hunter.rank < 1) {
    return
  }

  if (
    runtime.board?.[position.row]?.[position.col] &&
    runtime.board[position.row][position.col].isDead()
  ) {
    return false
  }

  const nearby = {
    top: {
      position: {
        row: position.row - 1,
        col: position.col
      },
      hunt: runtime.board?.[position.row - 1]?.[position.col] || null
    },
    right: {
      position: {
        row: position.row,
        col: position.col + 1
      },
      hunt: runtime.board?.[position.row]?.[position.col + 1] || null
    },
    bottom: {
      position: {
        row: position.row + 1,
        col: position.col
      },
      hunt: runtime.board?.[position.row + 1]?.[position.col] || null
    },
    left: {
      position: {
        row: position.row,
        col: position.col - 1,
      },
      hunt: runtime.board?.[position.row]?.[position.col - 1] || null
    },
    topLeft: {
      position: {
        row: position.row - 1,
        col: position.col - 1
      },
      hunt: runtime.board?.[position.row - 1]?.[position.col - 1] || null
    },
    topRight: {
      position: {
        row: position.row - 1,
        col: position.col + 1
      },
      hunt: runtime.board?.[position.row - 1]?.[position.col + 1] || null
    },
    bottomLeft: {
      position: {
        row: position.row + 1,
        col: position.col - 1
      },
      hunt: runtime.board?.[position.row + 1]?.[position.col - 1] || null
    },
    bottomRight: {
      position: {
        row: position.row + 1,
        col: position.col + 1
      },
      hunt: runtime.board?.[position.row + 1]?.[position.col + 1] || null
    }
  }

  const nodes = [
    nearby.top,
    nearby.right,
    nearby.bottom,
    nearby.left,
    nearby.topLeft,
    nearby.topRight,
    nearby.bottomLeft,
    nearby.bottomRight
  ].filter(x => x.hunt ? x.hunt.canKilled(hunter.rank) : false)

  for (let index = 0; index < nodes.length; index ++) {
    const node = nodes[index]
    if (!(
      prevPosition.row == node.position.row &&
      prevPosition.col == node.position.col
    )) {
      conquer(runtime, node.position, position, hunter)
    }
    node.hunt.kill(hunter.rank)
  }

  return true
}

module.exports = conquer
