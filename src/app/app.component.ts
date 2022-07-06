import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Componentes } from './interfaces/interfaces';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent implements OnInit{

  menus:Observable<Componentes[]>
  
  constructor(private dataService:DataService) {

    

  }
  ngOnInit(): void {
    this.menus=this.dataService.getMenuOpts();
  }




}
