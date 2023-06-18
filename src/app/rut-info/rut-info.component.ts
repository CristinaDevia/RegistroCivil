import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rut-info',
  templateUrl: './rut-info.component.html',
  styleUrls: ['./rut-info.component.css']
})
export class RutInfoComponent {
  @Input() rut: any;
}