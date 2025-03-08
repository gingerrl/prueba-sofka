import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list-service.service';
import { ProductInterface } from '../../interface/product-interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  dataProduct: ProductInterface[] = [];
  dataProductFilter: ProductInterface[] = [];
  isLoading: boolean = false;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.onProductList();
  }
  onProductList(): void {
    this.isLoading = true
    this.listService.getListProduct().subscribe((data) => {
      this.isLoading = false
      this.dataProduct = data;
      this.dataProductFilter = data;
    });
  }

  onSearchProduct(e: any): void {
    if (e.target.value.trim() === '') {
      this.dataProductFilter = this.dataProduct;
    } else {
      this.dataProductFilter = this.dataProduct.filter((x) =>
        x.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    }
  }
}
