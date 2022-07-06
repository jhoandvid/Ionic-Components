import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre:string="jhoan"

  usuario={
    email:'',
    password:''
  }

  onSubmit(formulario:NgForm){
    console.log("submit")
    console.log(formulario)
    console.log(this.usuario)
  }

  constructor() { }

  ngOnInit() {
  }

}
