import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MetaData, NgEventBus } from 'ng-event-bus';
import { formatDate } from '@angular/common';
import { ListService } from '../../services/list-service.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css',
})
export class FormPageComponent implements OnInit {
  isCreate = true;
  form: FormGroup = this.fb.group({
    id: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
    name: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ],
    ],
    logo: ['', [Validators.required]],
    date_release: ['', [Validators.required]],
    date_revision: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly eventBus: NgEventBus,
    private readonly listService: ListService
  ) {}

  ngOnInit(): void {
    this.eventBus.on('edit').subscribe((meta:MetaData) => {
      // console.log("dataaa",meta)
        this.onListChanges(meta.data)
    });
  }


  onButtonBack(){
    this.router.navigate(['/home'])
  }

  onButtonSend() {
    this.listService.verificationProduct(this.form.controls['id'].value).subscribe((data) =>{
      this.onListAdd(data)
    })
  }

  onListAdd(exist: boolean) {
    if (!exist) {
      this.listService.addProduct(this.form.value).subscribe(() => {
        this.router.navigate([`/home`]);
      })
    } else {
      alert('El id ya existe')
    }
  }

  onListUpdate() {
    this.listService.updateProduct(this.form.value).subscribe(() => {
      this.router.navigate([`/home`]);

    })
  }




  onListChanges(item:any) {
    console.log("itemmm",item)
    this.form.setValue({
      id: item.id,
      name: item.name,
      description: item.description,
      logo: item.logo,
      date_release: formatDate(item.date_release, 'YYYY-MM-dd', 'en', 'UTC'),
      date_revision: formatDate(item.date_revision, 'YYYY-MM-dd', 'en', 'UTC')
    })
  }

}
