import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Proyecto} from '../models/proyecto';
import {Global} from './global';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class ProyectoService{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    };

   
    saveProject(project:Proyecto):Observable<any>{
        let params=JSON.stringify(project);
        let headers=new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'save-proyecto',params,{headers:headers});

    };

    getProjects():Observable<any>{
        let headers= new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'proyectos', {headers:headers});
    };

    getProject(id):Observable<any>{
        let headers= new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'proyecto/'+id, {headers:headers});

    };


    deleteProject(id):Observable<any>{
        let headers= new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url+'proyecto/'+id, {headers:headers});

    };

    updateProyect(proyecto):Observable<any>{
        let params= JSON.stringify(proyecto);

        let headers= new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'proyecto/'+proyecto._id, params, {headers:headers});


    }


};