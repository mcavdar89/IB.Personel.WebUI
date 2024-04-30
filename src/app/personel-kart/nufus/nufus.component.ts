import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-nufus',
  templateUrl: './nufus.component.html',
  styleUrl: './nufus.component.scss'
})
export class NufusComponent implements OnInit{

  constructor( 
    private route: ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');


  }


}
