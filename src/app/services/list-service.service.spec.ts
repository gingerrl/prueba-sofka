import { TestBed } from '@angular/core/testing';

import { ListService } from './list-service.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Endpoints } from '../config/endpoints.enum';
import { ProductInterface } from '../interface/product-interface';

const data: ProductInterface[] = [
  {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  },
];

describe('ListService', () => {
  let service: ListService;
  let httpMock: HttpTestingController;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListService],
    });
    service = TestBed.inject(ListService);
  });
  beforeEach(() => {
    service = TestBed.inject(ListService);
    router = TestBed.inject(Router);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should method getListProduct', () => {
    service.getListProduct().subscribe((response) => {
      expect(response).toBe(data);
    });
    const request: TestRequest = httpMock.expectOne(`${Endpoints.URL}products`);
    request.flush(data);
  });

  it('should method addProduct', () => {
    service.addProduct(data).subscribe(() => {
      expect(request.request.method).toBe('POST');
    });
    const request: TestRequest = httpMock.expectOne(`${Endpoints.URL}products`);
  });

  it('should method updateProduct', () => {
    const id = 'uno';
    service.updateProduct(id, data).subscribe(() => {
      expect(request.request.method).toBe('PUT');
    });
    const request: TestRequest = httpMock.expectOne(
      `${Endpoints.URL}products/${id}`
    );
  });
  it('method verificationProduct', () => {
    const id = 'uno';
    service.verificationProduct(id).subscribe((resp) => {
      expect(resp).toBeFalsy();
    });
    const request: TestRequest = httpMock.expectOne(
      `${Endpoints.URL}products/verification/${id}`
    );
    request.flush(false);
  });

  it('should method delete', () => {
    const id = '';
    service.deleteProduct(id).subscribe((data) => {
      expect(data).toEqual('Product successfully removed');
    });
    const request: TestRequest = httpMock.expectOne(
      `${Endpoints.URL}products/${id}`
    );
    request.flush('Product successfully removed');
  });
});
