import { Component, OnInit } from '@angular/core';
import { IGame } from '../game';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  pageTitle: string = 'Game Detail';
  game: IGame;
  constructor(private route: ActivatedRoute, private router: Router){
    console.log(this.route.snapshot.paramMap.get('id'));
  }
  
  ngOnInit() {
    let id =+this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.game = {
      "gameId": id,
      "gameName": "Pandemic",
      "minPlayers": 2,
      "maxPlayers": 6,
      "genre": "Collaborative",
      "description": "Save the world from plagues!",
      "duration": "1 hour",
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

  onBack(): void{
    this.router.navigate(['/games']);
  }





}
