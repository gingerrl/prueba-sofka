import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductInterface } from '../../interface/product-interface';
import { ListService } from '../../services/list-service.service';
import { HomePageComponent } from './home-page.component';
import { of } from 'rxjs';

const data: ProductInterface[] = [
  {
    id: 'uno',
    name: 'registro uno',
    description: 'description uno',
    logo: 'assets.png',
    date_release: '2025-01-01',
    date_revision: '2025-10-01',
  },
];

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let service: ListService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [HomePageComponent],
      providers: [ListService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onProductList', () => {
    const list = jest
      .spyOn(service, 'getListProduct')
      .mockReturnValueOnce(of(data));
    component.dataProduct = data;
    component.dataProductFilter = data;
    component.onProductList();
    expect(list).toHaveBeenCalled();
  });

  it('method onSearchProduct', () => {
    const event = {
      target: {
        value: '',
      },
    };
    component.onSearchProduct(event);
    expect(component.dataProductFilter).toEqual(component.dataProduct);
  });

  it('method onSearchProduct', () => {
    const event = {
      target: {
        value: 'registro uno',
      },
    };
    component.dataProduct = data;
    component.onSearchProduct(event);
    expect(component.dataProductFilter.length).toBe(1);
  });
});
