
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Personel } from '../models/personel.model';
import { PersonelService } from '../services/personel.service';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrl: './personel-list.component.scss'
})
export class PersonelListComponent implements OnInit {

  list: Personel[]=[];


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

}
