import { Component, OnInit } from '@angular/core';
import {IGame} from "./game"
import {GameListService} from './game-list.service';

@Component({
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  pageTitle: string = 'Let me help you search the game shelf!';
  filteredGames: IGame[];
  numberOfPlayers: number;
  genre: string;
  searchTerm: string;
  errorMessage: string;
  
  _listFilter: string;
  _playersFilter: number;
  _genreFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value:string) {
    this._listFilter = value;
    this.searchTerm = value;
    this.filteredGames = this.performFilter(this.listFilter,this.numberOfPlayers, this.genre, this.gameList);
    // this.filteredGames = this.listFilter  || 
    //         this.numberOfPlayers? this.performFilter(this.listFilter,this.numberOfPlayers, this.genre, this.gameList) : this.gameList;
  }

  get playersFilter(): number{
    return this._playersFilter;
  }

  set playersFilter(value: number){
    this._playersFilter = value;
    this.numberOfPlayers = value;
    this.filteredGames = this.performFilter(this.searchTerm,this.playersFilter, this.genre, this.gameList)
    //this.filteredGames = this.playersFilter ? this.performFilter(this.searchTerm, this.playersFilter, this.genre, this.gameList): this.gameList;
  }

  get genreFilter(): string{
    return this._genreFilter;
  }

  set genreFilter(value: string){
    this._genreFilter = value;
    this.genre = value;
    this.filteredGames = this.performFilter(this.searchTerm,this.numberOfPlayers, this.genre, this.gameList)
    //this.filteredGames = this.genreFilter? this.performFilter(this.searchTerm, this.numberOfPlayers, this.genreFilter, this.gameList): this.gameList;
    
  }

  gameList: IGame[]= [];




  constructor(private gameListService: GameListService) { 
    this.filteredGames = this.gameList;
  }

  ngOnInit(): void {
    this.gameListService.getGames().subscribe(
      gameList => {
        this.gameList = gameList, 
        this.filteredGames = this.gameList;
      },
      error => this.errorMessage = <any>error
    );
  }


  performFilter(filterValue: string, numberOfPlayers: number, genre: string, list:IGame[]): IGame[]{
    return list.filter((game: IGame) =>
    ((genre ? game.genre === genre : true) &&
      (numberOfPlayers > 0? this.isInPlayerRange(game.minPlayers, game.maxPlayers, numberOfPlayers) : true )&&
      (filterValue? game.gameName.toLocaleLowerCase().indexOf(filterValue) !== -1 : true))

      );

  }

  filterByGameName(filterValue:string, list: IGame[]): IGame[]{

    filterValue = filterValue.toLocaleLowerCase();
    return list.filter((game: IGame) =>
       game.gameName.toLocaleLowerCase().indexOf(filterValue) !== -1);
  }

  filterByNumberOfPlayers(selectedNumberOfPlayers: number, list: IGame[]): IGame[]{
    
    return list.filter((game: IGame) =>
      (selectedNumberOfPlayers > 0 ? selectedNumberOfPlayers >= game.minPlayers &&
        selectedNumberOfPlayers <= game.maxPlayers: true));
  }

  filterByGenre(selectedGenre: string, list: IGame[]): IGame[]{  
    return list.filter((game: IGame) =>
    (selectedGenre ? game.genre === selectedGenre : true));
  }

  isInPlayerRange(minPlayers: number, maxPlayers: number, targetPlayers: number): boolean{
      return (targetPlayers >= minPlayers && targetPlayers <= maxPlayers);
  }

  

}
