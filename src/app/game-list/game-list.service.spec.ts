import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListService } from './game-list.service';
import {IGame} from './game'
import { HttpClientModule } from '@angular/common/http';

describe('GameListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,
    ]

  }));

  it('should be created', () => {
    const service: GameListService = TestBed.get(GameListService);
    expect(service).toBeTruthy();
  });

});
