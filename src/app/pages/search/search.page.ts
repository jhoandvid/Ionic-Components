import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componentes } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes:any[];
  textoBuscar:string="";

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe(album=>{

        this.albumes=album
    })
  }

  onSearchChange(event){
    this.textoBuscar=event.detail.value;

  }

}
