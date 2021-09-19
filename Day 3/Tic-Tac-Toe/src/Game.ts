export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    const countX = this.cells.filter((cell) => cell === "X").length;
    const countO = this.cells.filter((cell) => cell === "O").length;
    return countX === countO ? "X" : "O";
  }

  getWinner(): XO {
    if (
      this.cells[0] === "X" &&
      this.cells[1] === "X" &&
      this.cells[2] === "X"
    ) {
      return this.cells[0];
    } else if (
      this.cells[3] === "X" &&
      this.cells[4] === "X" &&
      this.cells[5] === "X"
    ) {
      return this.cells[3];
    } else if (
      this.cells[6] === "X" &&
      this.cells[7] === "X" &&
      this.cells[8] === "X"
    ) {
      return this.cells[6];
    } else if (
      this.cells[0] === "X" &&
      this.cells[3] === "X" &&
      this.cells[6] === "X"
    ) {
      return this.cells[6];
    } else if (
      this.cells[1] === "X" &&
      this.cells[4] === "X" &&
      this.cells[7] === "X"
    ) {
      return this.cells[1];
    } else if (
      this.cells[2] === "X" &&
      this.cells[5] === "X" &&
      this.cells[8] === "X"
    ) {
      return this.cells[2];
    } else if (
      this.cells[0] === "X" &&
      this.cells[4] === "X" &&
      this.cells[8] === "X"
    ) {
      return this.cells[0];
    } else if (
      this.cells[2] === "X" &&
      this.cells[4] === "X" &&
      this.cells[6] === "X"
    ) {
      return this.cells[6];
    } else if (
      this.cells[0] === "O" &&
      this.cells[1] === "O" &&
      this.cells[2] === "O"
    ) {
      return this.cells[0];
    } else if (
      this.cells[6] === "O" &&
      this.cells[7] === "O" &&
      this.cells[8] === "O"
    ) {
      return this.cells[6];
    } else if (
      this.cells[3] === "O" &&
      this.cells[4] === "O" &&
      this.cells[5] === "O"
    ) {
      return this.cells[3];
    } else if (
      this.cells[0] === "O" &&
      this.cells[3] === "O" &&
      this.cells[6] === "O"
    ) {
      return this.cells[6];
    } else if (
      this.cells[1] === "O" &&
      this.cells[4] === "O" &&
      this.cells[7] === "O"
    ) {
      return this.cells[1];
    } else if (
      this.cells[2] === "O" &&
      this.cells[5] === "O" &&
      this.cells[8] === "O"
    ) {
      return this.cells[2];
    } else if (
      this.cells[0] === "O" &&
      this.cells[4] === "O" &&
      this.cells[8] === "O"
    ) {
      return this.cells[0];
    } else if (
      this.cells[2] === "O" &&
      this.cells[4] === "O" &&
      this.cells[6] === "O"
    ) {
      return this.cells[6];
    }
    return "-";
  }

  isTie(): boolean {
    if (!this.cells.includes("-") && this.getWinner() === "-") {
      return true;
    }
    return false;
  }

  onClick(i: number): void {
    if (this.getWinner().includes("-")) {
      this.cells[i] = this.getTurn();
    }
  }

  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  }
}
