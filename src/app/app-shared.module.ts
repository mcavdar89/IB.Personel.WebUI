import { NgModule } from '@angular/core';
import { NufusComponent } from './personel-kart/nufus/nufus.component';
import { DxBulletModule, DxButtonModule, DxDataGridModule, DxFormModule, DxPopupModule, DxTemplateModule, DxTextBoxModule, DxToastModule } from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NufusComponent,
  ],
  imports: [
   CommonModule,
    ReactiveFormsModule,
    // DevExtreme
    DxButtonModule,
    DxPopupModule,


    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxFormModule,
    DxTextBoxModule,
    DxToastModule,
  ],
  exports:[     
    NufusComponent,   

    ReactiveFormsModule,


    // DevExtreme
    DxButtonModule,
    DxPopupModule,


    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxFormModule,

    DxTextBoxModule,

    DxToastModule,

  ],
  providers: []
})
export class AppSharedModule { }
