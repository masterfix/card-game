import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameShellComponent } from './game-shell.component';

describe('GameShellComponent', () => {
  let component: GameShellComponent;
  let fixture: ComponentFixture<GameShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameShellComponent]
    });
    fixture = TestBed.createComponent(GameShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
