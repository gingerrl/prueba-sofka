import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface, Response } from '../interface/product-interface';
import { map, Observable } from 'rxjs';
import { Endpoints } from '../config/endpoints.enum';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  getListProduct(): Observable<ProductInterface[]> {
    return this.http
      .get<Response<ProductInterface[]>>(`${Endpoints.URL}products`)
      .pipe(
        map((resp) => {
          console.log('mapp', resp);
          return resp.data;
        })
      );
  }

  addProduct(body: ProductInterface[]) {
    console.log('addd', body);
    return this.http.post(`${Endpoints.URL}products`, body);
  }

  updateProduct(body: ProductInterface[]) {
    return this.http.put(`${Endpoints.URL}`, body);
  }
  verificationProduct(id: string) {
    return this.http.get<boolean>(
      `${Endpoints.URL}products/verification/${id}`
    );
  }
}
