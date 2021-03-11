import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMarvelMoviesComponent } from './list-marvel-movies.component';

describe('ListMarvelMoviesComponent', () => {
  let component: ListMarvelMoviesComponent;
  let fixture: ComponentFixture<ListMarvelMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMarvelMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMarvelMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
