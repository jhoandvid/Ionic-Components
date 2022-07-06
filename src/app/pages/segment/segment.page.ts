import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  textoBuscar:string="";

  superHeroes:Observable<any>;


  constructor(private dataService:DataService){} 

  ngOnInit() {
    this.superHeroes=this.dataService.getHeroes();
  }
  segmentChanged(event){
   const {value}=event.detail;
   console.log(value)

   
    this.textoBuscar=value;


    if(value==="todos"){
      return this.textoBuscar="";
    }
   

  


  }



}
