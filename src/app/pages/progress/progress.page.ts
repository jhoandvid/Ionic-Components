import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje:number=0.05;

  constructor() { }

  rangeChange(event){
    console.log(event.detail.value)
    this.porcentaje=event.detail.value/100;
    console.log(this.porcentaje)

  }

  ngOnInit() {
  }

}
