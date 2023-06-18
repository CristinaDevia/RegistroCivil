import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms"

import { Router } from '@angular/router';
import { RutService } from '../rut.service';

@Component({
  selector: 'app-rut-form',
  templateUrl: './rut-form.component.html',
  styleUrls: ['./rut-form.component.css']
})

export class RutFormComponent {
  rut: any;

  constructor(public router: Router,private service: RutService) { }

  Brut= new FormGroup({
    rut: new FormControl("",Validators.required)
  })
  

  enviarrut(){
  if(this.Brut.status === 'INVALID'){
    alert("Campos Incompletos")}
  else if(this.Brut.status === "VALID"){
    this.rut = this.Brut.value.rut
    this.service.setrut(this.rut)
    this.router.navigate(["guardado"]);
  }
  }
  ngOnInit(): void {
  }

}