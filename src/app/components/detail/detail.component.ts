import { Component, OnInit } from '@angular/core';
import {Proyecto} from '../../models/proyecto';
import {ProyectoService} from '../../services/proyecto.service'; 
import {Global} from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProyectoService]
})
export class DetailComponent implements OnInit {
  public url:string;
  public proyecto:Proyecto;
  

  constructor(
    private project_service:ProyectoService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
     this.url= Global.url;

    
   }

  ngOnInit() {

    this._route.params.subscribe(params=>{ 
      let id= params.id;
      this.getProyecto(id);
    });


  }

  getProyecto(id){

    this.project_service.getProject(id).subscribe(
      response =>{

        this.proyecto=response.proyecto
        console.log(this.proyecto);

      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  deleteProyecto(id){
    this.project_service.deleteProject(id).subscribe(
      response=>{
        if(response.proyecto){
          this._router.navigate(['/proyectos']);
        }

      },
      error=>{
        console.log(<any>error)
      }
    );
  }

}
