import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScaleMusicComponent } from './full-scale-music.component';

describe('FullScaleMusicComponent', () => {
  let component: FullScaleMusicComponent;
  let fixture: ComponentFixture<FullScaleMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScaleMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScaleMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
