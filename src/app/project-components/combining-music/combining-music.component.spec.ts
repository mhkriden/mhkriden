import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombiningMusicComponent } from './combining-music.component';

describe('CombiningMusicComponent', () => {
  let component: CombiningMusicComponent;
  let fixture: ComponentFixture<CombiningMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombiningMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombiningMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
