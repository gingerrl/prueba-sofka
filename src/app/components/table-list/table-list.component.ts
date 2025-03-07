import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from '../../interface/product-interface';
import { Router } from '@angular/router';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-table-list-component',
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css',
})
export class TableListComponent {
  @Input() listProduct: ProductInterface[] = [];

  listDropDown : ProductInterface[] =[]
  showEdit = false;
  constructor(
    private readonly router: Router,
    private readonly eventBus: NgEventBus
  ) {}

  onButtonEdit(item: ProductInterface) {
    this.eventBus.cast('edit', item);

    this.router.navigate(['/form']);

    // console.log('edit', item);
  }

  onDropDown(e: any){
    console.log(e)
  }
}
