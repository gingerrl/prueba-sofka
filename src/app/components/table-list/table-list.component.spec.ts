import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListComponent } from './table-list.component';
import { NgEventBus } from 'ng-event-bus';

describe('TableListComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[

      ],
      declarations: [TableListComponent],
      providers:[
        NgEventBus
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
