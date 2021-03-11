import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDcMoviesComponent } from './list-dc-movies.component';

describe('ListDcMoviesComponent', () => {
  let component: ListDcMoviesComponent;
  let fixture: ComponentFixture<ListDcMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDcMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDcMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
