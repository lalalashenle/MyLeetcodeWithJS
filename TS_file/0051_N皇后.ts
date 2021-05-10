// 返回N皇后的所有结果
function solveNQueens(n: number): string[][] {
    let ans: string[][] = [];
    let board: string[][] = [];
    for (let i: number = 0; i < n; i++) {
        board[i].push('.');
    }
    // console.log(board);
    // dfs();
    return ans;
}

function dfs(board: string[][], row: number, column: number, ans: string[][]) {
    if (row === board.length) {
        if (check(board)) ans.push(["..Q"])
    }
}

function check(board: string[][]): boolean {
    return true;
}