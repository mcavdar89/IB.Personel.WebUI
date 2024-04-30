import { Component } from '@angular/core';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrl: './personel-list.component.scss'
})
export class PersonelListComponent {

  list: any[] = [
    { name: 'Ali', surname: 'Veli' },
    { name: 'Ayşe', surname: 'Fatma' },
    { name: 'Hüseyin', surname: 'Kemal' }

  ]
}
