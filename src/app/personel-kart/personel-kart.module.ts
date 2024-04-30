import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonelKartRoutingModule } from './personel-kart-routing.module';
import { PersonelKartComponent } from './personel-kart.component';
import { PersonelBilgiComponent } from './personel-bilgi/personel-bilgi.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NufusComponent } from './nufus/nufus.component';


@NgModule({
  declarations: [
    PersonelKartComponent,
    PersonelBilgiComponent,
    NufusComponent,
    IletisimComponent
  ],
  imports: [
    CommonModule,
    PersonelKartRoutingModule,
    ReactiveFormsModule
  ],
})
export class PersonelKartModule { }
