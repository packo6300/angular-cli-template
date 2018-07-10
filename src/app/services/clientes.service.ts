import { Injectable } from '@angular/core';
import {BaseRequestOptions,Http, Response, Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

const headers = new Headers();
headers.append('Access-Control-Allow-Methods', 'GET');
headers.append('Access-Control-Allow-Origin', '*');
const httpOptions = {
    headers: headers
};
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
    public url: string;
    constructor(private _http: Http) {
        this.url='http://localhost/inaxAPI/public/clientes/clientes';
    }
    getPrueba(){
        return 'Hola mundo desde el servicio';
    }
    getClientes(){
        return this._http.get(this.url).pipe(map(res => res.json()));
    }
}
