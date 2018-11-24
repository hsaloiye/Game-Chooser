import { NumberSymbol } from "@angular/common";

export interface IGame{
    gameId: number; 
    gameName: string;
    minPlayers: number;
    maxPlayers: number;
    genre: string;
    description: string;
    duration: string;
    imageUrl: string;
}
