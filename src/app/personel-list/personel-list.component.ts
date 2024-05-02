
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Personel } from '../models/personel.model';
import { PersonelService } from '../services/personel.service';
import { Nufus } from '../models/nufus.model';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrl: './personel-list.component.scss'
})
export class PersonelListComponent implements OnInit {

  list: Personel[] = [];
  isFormSet: boolean = false;

  selectedValue?: Personel;



  constructor(private personelService: PersonelService) { }

  ngOnInit(): void {

    console.log("log 1");
    //this.personelService.getPersonelList2(this.list);
    this.personelService.getPersonelList().subscribe(resp => {
      this.list = resp;
      console.log("log 2");

    });
    console.log("log 3");


  }
  calculateCellValue = (personel: Personel) => [personel.ad, personel.soyad, personel.unvanAd].join(' ');

  setForm(item?: Personel) {
    if (!item) {
      this.selectedValue = { id: 0 } as Personel;
    } else
      this.selectedValue = item;

    this.isFormSet = true;
  }


}
