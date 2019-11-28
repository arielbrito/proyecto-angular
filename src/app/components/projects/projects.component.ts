import { Component, OnInit } from '@angular/core';
import {Proyecto} from '../../models/proyecto';
import {ProyectoService} from '../../services/proyecto.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProyectoService]
})
export class ProjectsComponent implements OnInit {
  public proyectos:Proyecto[];
  public url:string;

  constructor(
    public _proyectoService:ProyectoService
  ) {
     this.url=Global.url;
   }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos(){
    this._proyectoService.getProjects().subscribe(
      response =>{

        if(response.proyectos){
          this.proyectos=response.proyectos;
        }
        console.log(response.proyectos);

      },
      error =>{
        console.log(<any>error);
      }
    );

  }

}
