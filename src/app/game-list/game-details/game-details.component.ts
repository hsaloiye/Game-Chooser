import { Component, OnInit } from '@angular/core';
import { IGame } from '../game';

@Component({
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  pageTitle: string = 'Game Detail';
  game: IGame;
  constructor() { }

  ngOnInit() {
  }

}
