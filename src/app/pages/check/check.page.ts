import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data=[
  {
    name:'primary',
    selection:false
  },

  {
    name:'secondary',
    selection:true
  },
  {
    name:'tertiary',
    selection:false
  },
  {
    name:'success',
    selection:true
  }

  ]

  onClick(item:any){
    console.log(item);
  }

  verData(){
    console.log(this.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
