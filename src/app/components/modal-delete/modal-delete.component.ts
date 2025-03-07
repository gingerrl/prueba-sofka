import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListService } from '../../services/list-service.service';

@Component({
  selector: 'app-modal-delete-component',
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.css',
})
export class ModalDeleteComponent {
  @Input() itemProduct = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  };
  @Output() closeModal = new EventEmitter();
  @Output() buttonConfirm = new EventEmitter();

  constructor(private readonly listService: ListService) {}

  onButtonCancel(): void {
    this.closeModal.emit();
  }

  onButtonConfirm(): void {
    this.listService.deleteProduct(this.itemProduct.id).subscribe(() => {
      this.buttonConfirm.emit();
    });
  }
}
