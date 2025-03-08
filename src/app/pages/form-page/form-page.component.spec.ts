import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgEventBus } from 'ng-event-bus';
import { ListService } from '../../services/list-service.service';
import { FormPageComponent } from './form-page.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ProductInterface } from '../../interface/product-interface';

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
describe('FormPageComponent', () => {
  let component: FormPageComponent;
  let fixture: ComponentFixture<FormPageComponent>;
  let service: ListService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [FormPageComponent],
      providers: [ListService, NgEventBus],
    }).compileComponents();

    fixture = TestBed.createComponent(FormPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onButtonSend updateProduct', async () => {
    jest.spyOn(router, 'navigate').mockImplementation();
    const update = await jest.spyOn(service, 'updateProduct');
    component.isCreate = false;
    component.onButtonSend();
    expect(update).toHaveBeenCalled();
  });

  it('should method onButtonSend verificationProduct', async () => {
    jest.spyOn(router, 'navigate').mockImplementation();
    const verification = await jest
      .spyOn(service, 'verificationProduct')
      .mockReturnValueOnce(of(false));
    component.isCreate = true;
    component.onButtonSend();
    expect(verification).toHaveBeenCalled();
  });

  it('should method onListAdd', () => {
    const navigate = jest.spyOn(router, 'navigate').mockImplementation();
    const value = false;
    const spy = jest.spyOn(service, 'addProduct').mockReturnValueOnce(of(data));
    component.onListAdd(value);
    expect(spy).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should method onListUpdate', () => {
    const navigate = jest.spyOn(router, 'navigate').mockImplementation();
    component.isCreate = false;
    const spy = jest
      .spyOn(service, 'updateProduct')
      .mockReturnValueOnce(of(data));
    component.onListUpdate();
    expect(spy).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should method onButtonReseet', () => {
    component.onButtonReseet();
    expect(component.form.controls['id'].value).toBe(null);
  });

  it('should method onButtonBack', () => {
    const navigate = jest.spyOn(router, 'navigate').mockImplementation();
    component.onButtonBack();
    expect(navigate).toHaveBeenCalledWith(['/home']);
  });
});
