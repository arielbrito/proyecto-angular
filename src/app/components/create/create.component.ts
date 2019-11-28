import { Component, OnInit } from '@angular/core';
import {Proyecto} from '../../models/proyecto';
import {ProyectoService} from '../../services/proyecto.service'; 
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[
    ProyectoService,
    UploadService
  ]
})
export class CreateComponent implements OnInit {

  public title:string;
  public proyecto:Proyecto;
  public status:string;
  public filesToUpload:Array<File>
  public url:string;
  public save_project;


  constructor(
    private _proyectoService:ProyectoService,
    private _uploadService:UploadService
  ) {
    this.title="Crear proyecto";
    this.proyecto= new Proyecto("","","","",2019,"","");
    this.url=Global.url;
   };

  ngOnInit() {
  };

  onSubmit(form){    
    //Guardar los datos basicos en la base de datos
    this._proyectoService.saveProject(this.proyecto).subscribe(
      response =>{
        console.log(response);
        if(response.proyecto) {
          
          //Subir la imagen
          this._uploadService.makeFileRequest(this.url+"subir-imagen/"+response.proyecto._id,[],this.filesToUpload,'image' )
              .then((result:any)=>{
                this.save_project=result.proyecto;
                this.status="true";
            console.log(result)
            form.reset();
          });
          
        }else{
          this.status="false";
        }

      },
      error=>{
        console.log(<any>error);
      }
    );    
    console.log(this.proyecto);    
  };


  fileChangeEvent(fileInput:any){
    this.filesToUpload= <Array<File>>fileInput.target.files;

    console.log(this.filesToUpload);

  }

  

};
