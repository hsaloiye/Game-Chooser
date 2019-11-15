import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';
import{RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { NewGameComponent } from './game-list/new-game/new-game.component';
import { GameDetailsComponent } from './game-list/game-details/game-details.component';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    NewGameComponent,
    GameDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      {path: 'newGame', component: NewGameComponent},
      {path: 'games', component: GameListComponent},
      {path: 'games/:id', component: GameDetailsComponent},
      {path: '', redirectTo: 'games', pathMatch: 'full'},
      {path: '**', redirectTo: 'games', pathMatch: 'full'}//replace this with 404/error
    
    ]),//{useHash: true} for hash style routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
