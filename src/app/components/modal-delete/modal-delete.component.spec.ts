import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ListService } from '../../services/list-service.service';
import { ModalDeleteComponent } from './modal-delete.component';

describe('ModalDeleteComponent', () => {
  let component: ModalDeleteComponent;
  let fixture: ComponentFixture<ModalDeleteComponent>;
  let service: ListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ModalDeleteComponent],
      providers: [ListService],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDeleteComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onButtonConfirm', async () => {
    const onDelete = jest
      .spyOn(service, 'deleteProduct')
      .mockReturnValueOnce(of('Product successfully removed'));
    component.onButtonConfirm();
    await expect(onDelete).toHaveBeenCalled();
  });
});
