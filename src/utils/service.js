function getSquares(n) {
    const squares = [];
    for (let i=0; i < n*n; i++) {
        squares.push(createSquare(i, n));
    }
    return squares;
}

function createSquare(i, n) {
    return {
        id: i,
        color: calculateColor(i, n),
        neighbours: calculateNeighbours(i, n)
    };
}

function calculateColor(i, n) {
    if (n%2 === 1) {
        return i%2 === 0 ? "black" : "white";
    } else {
        return (i + Math.floor(i/n))%2 === 0 ? "black" : "white";
    }
}

function revertColor(color) {
    return color === "black" ? "white" : "black";
}

function calculateNeighbours(i, n) {
    let neighbours = [i+1, i-1, i+n, i-n];
    if (i === 0) {
        neighbours = [i+1, i+n];
    } else if (i === n-1) {
        neighbours = [i-1, i+n]
    } else if (i === n*(n-1)) {
        neighbours = [i-n, i+1]
    } else if (i === n*n-1) {
        neighbours = [i-1, i-n]
    } else if (i < n) {
        neighbours = [i-1, i+ 1, i+n]
    } else if (n*(n-1) < i ) {
        neighbours = [i-1, i+1, i-n]
    } else if (i%n === 0) {
        neighbours = [i+1, i-n, i+n]
    } else if (i%n === n-1) {
        neighbours = [i-1, i-n, i+n]
    }
    return neighbours;
}

function getMfromN(m, n) {
    const result = [];
    while (result.length < m) {
        const nextItem = Math.floor(Math.random()*n);
        if (!result.includes(nextItem)) {
            result.push(nextItem);
        }
    }
    return result;
}

function areBoardsEqual(a, b) {
    for (let i=0; i < a.length; i++) {
        if (a[i].color !== b[i].color) {
            return false;
        }
    }
    return true;
}

export {getSquares, revertColor, getMfromN, areBoardsEqual}