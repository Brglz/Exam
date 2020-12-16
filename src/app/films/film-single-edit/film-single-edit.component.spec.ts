import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSingleEditComponent } from './film-single-edit.component';

describe('FilmSingleEditComponent', () => {
  let component: FilmSingleEditComponent;
  let fixture: ComponentFixture<FilmSingleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmSingleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSingleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
