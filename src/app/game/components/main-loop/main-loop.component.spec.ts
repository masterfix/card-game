import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLoopComponent } from './main-loop.component';

describe('MainLoopComponent', () => {
  let component: MainLoopComponent;
  let fixture: ComponentFixture<MainLoopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLoopComponent]
    });
    fixture = TestBed.createComponent(MainLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
