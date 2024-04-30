import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PersonelService } from '../../services/personel.service';
import { Nufus } from '../../models/nufus.model';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nufus',
  templateUrl: './nufus.component.html',
  styleUrl: './nufus.component.scss'
})
export class NufusComponent implements OnInit {
  data?: Nufus;
  id?: number;


  formSubmitted = false;


  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private personelService: PersonelService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [0],
      ad: ['', [Validators.required]],
      soyad: ['', [Validators.required]],
      tckn: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]*$')]],
      dogumTarihi: ['', [Validators.required]],
      cinsiyet: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.id && this.id != 0) {

      this.personelService.getPersonelNufus(this.id).subscribe(resp => {
        this.data = resp;
        this.form.patchValue(this.data);
        console.log(resp);
      });

    }
  }

  kaydet() {
    debugger;
    this.formSubmitted = true;

    let item = this.form.value;
    console.log(item);
    let isformValid = this.form.valid;
    if (this.form.valid) {
      this.personelService.kaydetNufus(this.form.value).subscribe(resp => {
        this.data = resp;
        this.form.patchValue(this.data);
      });
    } else {

    }




  }


}
