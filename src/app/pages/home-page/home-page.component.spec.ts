import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListService } from '../../services/list-service.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
         ReactiveFormsModule,
                FormsModule,
                HttpClientTestingModule
      ],
      declarations: [HomePageComponent],
      providers:[
        ListService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
