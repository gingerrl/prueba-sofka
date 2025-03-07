import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Endpoints } from '../config/endpoints.enum';
import { ProductInterface, Response } from '../interface/product-interface';

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
          return resp.data;
        })
      );
  }

  addProduct(body: ProductInterface[]) {
    return this.http.post(`${Endpoints.URL}products`, body);
  }

  updateProduct(id: string, body: ProductInterface[]) {
    return this.http.put(`${Endpoints.URL}products/${id}`, body);
  }

  verificationProduct(id: string) {
    return this.http.get<boolean>(
      `${Endpoints.URL}products/verification/${id}`
    );
  }

  deleteProduct(id: string) {
    return this.http.delete(`${Endpoints.URL}products/${id}`);
  }
}
