import { NgModule } from '@angular/core';
import { NufusComponent } from './personel-kart/nufus/nufus.component';
import { DxBulletModule, DxButtonModule, DxDataGridModule, DxFormModule, DxPopupModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';
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



  ],
  providers: []
})
export class AppSharedModule { }
