import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgEventBus } from 'ng-event-bus';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { SearchComponent } from './components/search-product/search.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListService } from './services/list-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchComponent,
    TableListComponent,
    ModalDeleteComponent,
    FormPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ListService, NgEventBus],
  bootstrap: [AppComponent],
})
export class AppModule {}
