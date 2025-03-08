import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { NgEventBus } from 'ng-event-bus';
import { ProductInterface } from '../../interface/product-interface';
import { TableListComponent } from './table-list.component';

const item: ProductInterface = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
};

describe('TableListComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;
  let router: Router;
  let eventBus: NgEventBus;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [TableListComponent],
      providers: [NgEventBus],
    }).compileComponents();

    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    eventBus = TestBed.inject(NgEventBus);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onButtonEdit', () => {
    const navigate = jest.spyOn(router, 'navigate').mockImplementation();
    component.onButtonEdit(item);

    expect(navigate).toHaveBeenCalledWith(['/form']);
  });

  it('should method onButtonDelete', () => {
    component.isModalDelete = true;
    component.onButtonDelete(item);
    expect(component.itemProductDel).toBe(item);
  });

  it('should method onCloseModal', () => {
    component.onCloseModal();
    expect(component.isModalDelete).toBeFalsy();
  });

  it('should method onModalConfirm', () => {
    component.onModalConfirm();
    expect(component.isModalDelete).toBeFalsy();
  });

  it('should method onDropDown', () => {
    const mockEvent = {
      target: {
        value: 5,
      },
    };
    component.onDropDown(mockEvent);
    expect(component.listDropDown).toEqual([]);
  });

  it('should method onValidUrl url valid true', () => {
    const url =
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg';
    expect(component.onValidUrl(url)).toBe(true);
  });

  it('should method onValidUrl  url invalid false', () => {
    const url = 'assets.png';
    expect(component.onValidUrl(url)).toBe(false);
  });
});
