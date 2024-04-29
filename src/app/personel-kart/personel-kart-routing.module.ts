import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonelKartComponent } from './personel-kart.component';
import { NufusComponent } from './nufus/nufus.component';
import { PersonelBilgiComponent } from './personel-bilgi/personel-bilgi.component';
import { IletisimComponent } from './iletisim/iletisim.component';

const routes: Routes = [
  {
    path: '', component: PersonelKartComponent,
    children: [
      { path: 'nufus', component: NufusComponent },
      { path: 'personelbilgi', component: PersonelBilgiComponent },
      { path: 'iletisim', component: IletisimComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonelKartRoutingModule { }
