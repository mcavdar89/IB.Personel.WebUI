import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  // inputs: ['baslik']
})
export class TestComponent {
  // baslik?:string;
  @Input() baslik?: string;
  @Output() getTestIcerik: EventEmitter<string> = new EventEmitter();

  @Output() getSonuc = new EventEmitter<number>();



  counter: number = 0;

  setOutput(value: string) {
    if (this.counter == 0)
      this.getTestIcerik.emit(value);
    else
      this.getTestIcerik.emit(value + " " + this.counter);

    this.counter++;
  }

  //hesap makinesi
  sayi1: number | any;
  sayi2: number | any;

  topla() {

    this.getSonuc.emit(this.sayi1 + this.sayi2);

    console.log("Toplam:" + (this.sayi1 + this.sayi2));
  }






}
