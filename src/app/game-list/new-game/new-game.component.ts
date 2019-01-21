import { Component, OnInit } from '@angular/core';

import {IGame} from '../game';
@Component({
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  pageTitle: string = 'Add a New Game';
  game: IGame;

  constructor() { }

  ngOnInit() {
  }

}
