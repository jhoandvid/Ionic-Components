import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componentes } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Observable<Componentes[]>

  constructor(private menuCtrol:MenuController,
              private dataService:DataService) { }

  ngOnInit() {
    this.componentes=this.dataService.getMenuOpts();
  }


  mostrarMenu(){
    this.menuCtrol.open('first');

  }

}
