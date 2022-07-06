import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes:string[]=['Aquaman', 'Superman','Batman', 'Mujer Maravilla','Flash']
  icon:boolean=false;
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  constructor() { }

  ngOnInit() {
  }

  doReorder(event){
    console.log(event);

    const itemMover=this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);


    event.detail.complete();

    console.log(this.personajes)
  }

  toggle(){

    this.reorderGroup.disabled=!this.reorderGroup.disabled
    this.icon=!this.icon;

  }

}
