import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteComponentComponent } from './modal-delete.component';

describe('ModalDeleteComponentComponent', () => {
  let component: ModalDeleteComponentComponent;
  let fixture: ComponentFixture<ModalDeleteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDeleteComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
