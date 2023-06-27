import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  resultado: any;

  constructor(private http: HttpClient) {}

  buscar() {
    const rut = (document.getElementById('rut') as HTMLInputElement).value;
    this.http.get<any>(`http://localhost/api/buscar.php?rut=${rut}`)
      .subscribe(
        response => {
          console.log(response); // Agrega esta línea para imprimir la respuesta en la consola
          this.resultado = response.resultado;
        },
        error => {
          console.log(error);
        }
      );
  }
  
}
