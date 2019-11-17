import { TestBed, async, inject } from '@angular/core/testing';

import { GameDetailsGuard } from './game-details.guard';

describe('GameDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameDetailsGuard]
    });
  });

  it('should ...', inject([GameDetailsGuard], (guard: GameDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
