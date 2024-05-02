import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonelListComponent } from './personel-list/personel-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DxBulletModule, DxButtonModule, DxDataGridModule, DxPopupModule, DxTemplateModule } from 'devextreme-angular';
import { PersonelKartModule } from './personel-kart/personel-kart.module';
import { AppSharedModule } from './app-shared.module';

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

    AppSharedModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
