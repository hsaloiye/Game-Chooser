import { Component, OnInit } from '@angular/core';
import {IGame} from "./game"
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/container';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  pageTitle: string = 'Find your game here:';
  filteredGames: IGame[];
  
  _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredGames = this.listFilter ? this.filterByGameName(this.listFilter, this.gameList) : this.gameList;
  }

  _playersFilter: number;

  get playersFilter(): number{
    return this._playersFilter;
  }

  set playersFilter(value: number){
    this._playersFilter = value;
    this.filteredGames = this.playersFilter ? this.filterByNumberOfPlayers(this.playersFilter, this.gameList): this.gameList;
  }

  gameList: IGame[]= [{
    "gameId": 1,
    "gameName": "Pandemic",
    "minPlayers": 2,
    "maxPlayers": 4,
    "genre": "Collaborative",
    "description": "Save the world from plagues!",
    "duration": "1 hour",
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  },
  {
    "gameId": 2,
    "gameName": "Splendor",
    "minPlayers": 2,
    "maxPlayers": 4,
    "genre": "Resource Management",
    "description": "Buy gems, create the best collections, and attract the nobles.",
    "duration": "30 minutes",
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  },
  {
    "gameId": 3,
    "gameName": "The Stars are Right",
    "minPlayers": 2,
    "maxPlayers": 4,
    "genre": "Strategy",
    "description": "Align the stars to create constallations to summon Lovecraftian demons",
    "duration": "45 mintues",
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  },
  {
    "gameId": 4,
    "gameName": "Hanabi",
    "minPlayers": 3,
    "maxPlayers": 5,
    "genre": "Collaborative",
    "description": "Work together to build the best fireworks display",
    "duration": "30 minutes",
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  }];



  constructor() { 
    this.filteredGames = this.gameList;
  }

  ngOnInit() {
  }

  filterByGameName(filterValue:string, list: IGame[]): IGame[]{

    filterValue = filterValue.toLocaleLowerCase();
    return list.filter((game: IGame) =>
       game.gameName.toLocaleLowerCase().indexOf(filterValue) !== -1);
  }

  filterByNumberOfPlayers(filterValue: number, list: IGame[]): IGame[]{

    return list.filter((game: IGame) =>
      (filterValue >= game.minPlayers &&
      filterValue <= game.maxPlayers));
  }

  

}
