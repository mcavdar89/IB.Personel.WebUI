import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  uyariMesajGorunurlulugu: boolean = false;
  mesajTip: 'info' | 'success' | 'error' | 'warning' = 'info';
  mesajNekadarSureGorunur: number = 1000;
  mesaj: string = '';


  helloWorld() {
    alert('Hello world!');
  }


  setUyariMesaj(mesaj: string, tip: 'info' | 'success' | 'error' | 'warning' = 'info', sure: number = 1000) {
    this.mesaj = mesaj;
    this.mesajTip = tip;
    this.uyariMesajGorunurlulugu = true;
    setTimeout(() => {
      this.uyariMesajGorunurlulugu = false;
    }, sure);
  }


}
