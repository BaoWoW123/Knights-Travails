export default function knightMoves(knight, end) {
  if (knight === "") {
    return alert("Missing Knight");
  } else if (end === "") {
    return alert("Missing End Location");
  } else {
    knight = knight.split("").map(Number);
    end = end.split("").map(Number);
    return new Tree().minMoves(knight, end);
  }
}

class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.parent = null;
  }
}

class Tree {
  minMoves(knight, end) {
    let possibleX = [-2, -1, 1, 2, -2, -1, 1, 2];
    let possibleY = [-1, -2, -2, -1, 1, 2, 2, 1];
    let queue = [];
    queue.push(new Node(knight[0], knight[1], 0));
    let current;
    let x;
    let y;
    let row = Array(8);
    let path = [];

    for (let i = 0; i < 8; i++) {
      //makes 8 cells in each row
      row[i] = Array(8);
      for (let j = 0; j < 8; j++) {
        row[i][j] = false;
      }
    }

    row[knight[0]][knight[1]] = true;

    while (queue.length > 0) {
      current = queue.shift();
      if (current.x === end[0] && current.y === end[1]) {
        path.push(current);
        return this.findPath(current, knight);
      }
      path.push(current);
      for (let i = 0; i < 8; i++) {
        x = current.x + possibleX[i];
        y = current.y + possibleY[i];
        if (this.onBoard(x, y) && row[x][y] == false) {
          row[x][y] = true;
          let node = new Node(x, y);
          node.parent = current;
          queue.push(node);
        }
      }
    }
  }

  findPath(current, knight) {
    let endNode = current;
    let shortestPath = [];

    while (endNode) {
      shortestPath.unshift(endNode);
      if (endNode.x == knight[0] && endNode.y == knight[1]) {
        return shortestPath;
      }
      endNode = endNode.parent;
    }
  }

  onBoard(x, y) {
    if (x < 0 || x >= 8 || y < 0 || y >= 8) {
      return false;
    } else return true;
  }
}
