import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonelListComponent } from './personel-list/personel-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DxBulletModule, DxButtonModule, DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PersonelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
