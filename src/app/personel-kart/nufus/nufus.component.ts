import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PersonelService } from '../../services/personel.service';
import { Nufus } from '../../models/nufus.model';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-nufus',
  templateUrl: './nufus.component.html',
  styleUrl: './nufus.component.scss'
})
export class NufusComponent implements OnInit {
  @Input() id?: number;
  data?: Nufus;
  isToastVisible: boolean = false;

  @ViewChild(DxFormComponent, { static: false }) form?: DxFormComponent;



  formSubmitted = false;
  tcknEditorOptions: Object;

  // form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private personelService: PersonelService,
    // private formBuilder: FormBuilder
  ) {
    this.tcknEditorOptions = { mask: '00000000000' };
    // this.form = this.formBuilder.group({
    //   id: [0],
    //   ad: ['', [Validators.required]],
    //   soyad: ['', [Validators.required]],
    //   tckn: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]*$')]],
    //   dogumTarihi: ['', [Validators.required]],
    //   cinsiyet: ['', [Validators.required]],
    // })
  }
  ngOnInit(): void {
    debugger;
    //input olarak id gelmemmiş ise url'den al
    if (!this.id && this.id == 0)
      this.id = Number(this.route.snapshot.paramMap.get('id'));

    //id varsa getir
    if (this.id && this.id != 0) {

      this.personelService.getPersonelNufus(this.id).subscribe(resp => {
        this.data = resp;

        console.log(resp);
      });

    }
    else {
      this.data = {
        id: 0,
        ad: '',
        soyad: '',
        tckn: '',
        dogumTarihi: new Date(),
        cinsiyet: ''
      } as Nufus;
    }
  }

 



  kaydet() {
    if (this.form?.instance.validate().isValid) {
      this.personelService.kaydetNufus(this.data!!).subscribe(resp => {
        this.data = resp;
        this.isToastVisible = true;
      });
    }




    // debugger;
    // this.formSubmitted = true;

    // let item = this.form.value;
    // console.log(item);
    // let isformValid = this.form.valid;
    // if (this.form.valid) {
    //   this.personelService.kaydetNufus(this.form.value).subscribe(resp => {
    //     this.data = resp;
    //     this.form.patchValue(this.data);
    //   });
    // } else {

    // }




  }
  guncelle() {
    if (this.form?.instance.validate().isValid) {
      this.personelService.guncelleNufus(this.data!!).subscribe(resp => {
        this.data = resp;
        this.isToastVisible = true;

      });
    }


  }
}
