import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {


    fechaNaci:Date=new Date();
  constructor() { }

  customPickerOptions={
      buttons:[
        {
          text:"hola",

        },

        {
          text:"mundo"
        }
      ]
  }

  cambioFecha(event:any){
    console.log(event)
    console.log(new Date(event.detail.value))
  }

  ngOnInit() {
  }

}