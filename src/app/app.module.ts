import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';
import{RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { NewGameComponent } from './game-list/new-game/new-game.component';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    NewGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'newGame', component: NewGameComponent},
      {path: 'games', component: GameListComponent},
      {path: '', redirectTo: 'games', pathMatch: 'full'},
      {path: '**', redirectTo: 'games', pathMatch: 'full'}//replace this with 404/error
    
    ]),//{useHash: true} for hash style routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
