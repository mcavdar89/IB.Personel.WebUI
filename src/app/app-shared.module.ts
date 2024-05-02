import { NgModule } from '@angular/core';
import { NufusComponent } from './personel-kart/nufus/nufus.component';
import { DxBulletModule, DxButtonModule, DxDataGridModule, DxPopupModule, DxTemplateModule } from 'devextreme-angular';
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
  ],
  providers: []
})
export class AppSharedModule { }
