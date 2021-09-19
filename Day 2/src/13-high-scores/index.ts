/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    return this.scores.pop();
  }

  get personalBest() {
    return Math.max.apply(null, this.scores);
  }

  get personalTopThree() {
    return this.scores.sort((temp, current) => current - temp).slice(0, 3);
  }
}

export { HighScores };
