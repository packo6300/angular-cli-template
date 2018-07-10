import { Injectable } from '@angular/core';
import {BaseRequestOptions,Http, Response, Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {
    public url: string;
    constructor(private _http: Http) {
        this.url="http://localhost:82/api-avance/public/api/";
    }
    getCotizaciones(){
        return this._http.get(this.url+'cotizaciones').pipe(map(res => res.json()));
    }
    getCotizacionesByUser(){
        return this._http.get(this.url).pipe(map(res => res.json()));
    }
}
