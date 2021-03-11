import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNationalMoviesComponent } from './list-national-movies.component';

describe('ListNationalMoviesComponent', () => {
  let component: ListNationalMoviesComponent;
  let fixture: ComponentFixture<ListNationalMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNationalMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNationalMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
