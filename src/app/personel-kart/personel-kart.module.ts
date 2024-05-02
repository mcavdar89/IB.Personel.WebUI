import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonelKartRoutingModule } from './personel-kart-routing.module';
import { PersonelKartComponent } from './personel-kart.component';
import { PersonelBilgiComponent } from './personel-bilgi/personel-bilgi.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NufusComponent } from './nufus/nufus.component';
import { AppSharedModule } from '../app-shared.module';


@NgModule({
  declarations: [
    PersonelKartComponent,
    PersonelBilgiComponent,
    
    IletisimComponent
  ],
  imports: [
    CommonModule,
    PersonelKartRoutingModule,
    AppSharedModule
  ],
  exports:[
    NufusComponent
  ]
})
export class PersonelKartModule { }
