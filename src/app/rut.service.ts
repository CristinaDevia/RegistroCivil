import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RutService {
  private apiUrl: string = environment.mysqlConfig.url;

  constructor(private http: HttpClient) { }

  public setsetrut(rut: any, ){
    if()
    this.propie.push(`${rut}`)
  }

  getRutInfo(rut: string) {
    const url = `${this.apiUrl}/localhost:4200/?rut=${rut}`; // Reemplaza "rutInfo" con la ruta adecuada de tu API

    return this.http.get(url);
  }
}