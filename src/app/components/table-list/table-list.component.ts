import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgEventBus } from 'ng-event-bus';
import { ProductInterface } from '../../interface/product-interface';

@Component({
  selector: 'app-table-list-component',
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css',
})
export class TableListComponent  implements OnChanges{
  @Input() listProduct: ProductInterface[] = [];
  @Output() eventListProd = new EventEmitter();

  isModalDelete = false
  listDropDown: ProductInterface[] = [];
  itemProductDel: ProductInterface  ={
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  }
  constructor(
    private readonly router: Router,
    private readonly eventBus: NgEventBus
  ) {}


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
     this.listDropDown = changes?.['listProduct'].currentValue.slice(0,5)
  }

  onDropDown(e: any) {
    this.listDropDown = this.listProduct.slice(0, e.target.value)
    console.log("dropp",this.listDropDown)
  }

  onButtonEdit(item: ProductInterface) {
    setTimeout(() => {
      this.eventBus.cast('edit', item);
    }, 300);
    this.router.navigate(['/form']);
  }




  onButtonDelete(item: ProductInterface){
    this.itemProductDel = item
    this.isModalDelete = true
  }

  onCloseModal(){
    this.isModalDelete= false
  }

  onModalConfirm(){
    this.isModalDelete = false
    this.eventListProd.emit()
  }
  onValidUrl(url: string) {
    try {
      return Boolean(new URL(url));
    } catch (e) {
      return false;
    }
  }
}
