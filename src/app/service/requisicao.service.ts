import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    public http:HttpClient
  ) { }

  get(dados:any){
    return this.http.get('/requisicao', {
      params:{
        _dados:dados
      }
    });
  }

  post(formData:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Acess-Control-Allow-Origin' : '*'
      })
    };
    return this.http.post('/requisicao', formData, httpOptions);
  }
}
