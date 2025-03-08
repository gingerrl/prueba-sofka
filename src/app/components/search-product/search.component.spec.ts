import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onButtonAdd', () => {
    const navigate = jest.spyOn(router, 'navigate').mockImplementation();
    component.onButtonAdd();
    expect(navigate).toHaveBeenCalledWith(['/form']);
  });
});
