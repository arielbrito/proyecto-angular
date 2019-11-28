import { Component, OnInit } from '@angular/core';
import {Proyecto} from '../../models/proyecto';
import {ProyectoService} from '../../services/proyecto.service'; 
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProyectoService, UploadService]
})
export class EditComponent implements OnInit {
  public title:string;
  public proyecto:Proyecto;
  public status:string;
  public filesToUpload:Array<File>
  public url:string;
  public save_project;


  constructor(
    private _proyectoService:ProyectoService,
    private _uploadService:UploadService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.title="Editar  proyecto";
    this.proyecto= new Proyecto("","","","",2019,"","");
    this.url=Global.url;
   };


  ngOnInit() {
    this._route.params.subscribe(params=>{ 
      let id= params.id;
      this.getProyecto(id);
    });


  }

  getProyecto(id){

    this._proyectoService.getProject(id).subscribe(
      response =>{

        this.proyecto=response.proyecto
        console.log(this.proyecto);

      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  onSubmit(){
    this._proyectoService.updateProyect(this.proyecto).subscribe(
      response=>{
        if(response.proyecto) {
        this.proyecto=response.proyecto
        console.log(this.proyecto);
        //Subir la imagen

        if(this.filesToUpload){  
        this._uploadService.makeFileRequest(this.url+"subir-imagen/"+response.proyecto._id,[],this.filesToUpload,'image' )
        .then((result:any)=>{
          this.save_project=result.proyecto;
          this.status="true";
      console.log(result)
      
    });
  }else{
    this.save_project=response.proyecto;
          this.status="true";
  }
    
  }else{
    this.status="false";
  }

      },
      error=>{
        console.log(<any>error);

      }


    );
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload= <Array<File>>fileInput.target.files;

    console.log(this.filesToUpload);

  }

}
