import { Board, DeadZone } from './Board';
import { Player, PlayerType } from './Player';
import './Piece';

export class Game {
  private turn = 0;
  
  readonly upperPlayer = new Player(PlayerType.UPPER);
  readonly lowerPlayer = new Player(PlayerType.LOWER);
  
  readonly board = new Board(this.upperPlayer, this.lowerPlayer);
  readonly upperDeadZonde = new DeadZone('upper');
  readonly lowerDeadZonde = new DeadZone('lower');
  
  constructor() {
    const boardContainer = document.querySelector('.board-container');
    boardContainer.firstChild.remove();
    boardContainer.appendChild(this.board._el);

    this.board.render();
  }
}