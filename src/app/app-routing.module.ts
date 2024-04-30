import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonelListComponent } from './personel-list/personel-list.component';

const routes: Routes = [
  { path: 'personellist', component: PersonelListComponent },
  { path: 'personelkart', loadChildren: () => import('./personel-kart/personel-kart.module').then(m => m.PersonelKartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
