import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{FormsModule} from '@angular/forms';

import { GameListComponent } from './game-list.component';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import {IGame} from "./game"

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GameListComponent,
      ],
      imports:[
        FormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Perform Filter', () => {
    let testGameList: IGame[]= [{
      "gameId": 1,
      "gameName": "Monopoly",
      "minPlayers": 2,
      "maxPlayers": 4,
      "genre": "Classic",
      "description": "Buy real estate and bankrupt your friends",
      "duration": "1.5 hours",
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "gameId": 2,
      "gameName": "Fake Game",
      "minPlayers": 2,
      "maxPlayers": 4,
      "genre": "Resource Management",
      "description": "Buy gems, create the best collections, and attract the nobles.",
      "duration": "30 minutes",
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "gameId": 3,
      "gameName": "New Game",
      "minPlayers": 2,
      "maxPlayers": 4,
      "genre": "Strategy",
      "description": "Align the stars to create constallations to summon Lovecraftian demons",
      "duration": "45 mintues",
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }];
   
    it('should return a list with filtered criteria', () => {
        var expectedList: IGame[] = [   {
          "gameId": 2,
          "gameName": "Fake Game",
          "minPlayers": 2,
          "maxPlayers": 4,
          "genre": "Resource Management",
          "description": "Buy gems, create the best collections, and attract the nobles.",
          "duration": "30 minutes",
          "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
          "gameId": 3,
          "gameName": "New Game",
          "minPlayers": 2,
          "maxPlayers": 4,
          "genre": "Strategy",
          "description": "Align the stars to create constallations to summon Lovecraftian demons",
          "duration": "45 mintues",
          "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        }];

        var actualList: IGame[] = component.performFilter('game', testGameList);
        expect(actualList).toEqual(expectedList);

    })

  });
  
 
});
