import {Injectable} from '@angular/core';
import {Global} from './global';

@Injectable()
export class UploadService{
    public url:string;

    constructor(){
        this.url=Global.url;
    }
    
      //Esto es un metodo para subir un archivo al servidor utilizado el metodo AJAX con la promesa
    makeFileRequest(url, params:Array<string>, files:Array<File> , name:string){

        return new Promise(function(resolve, reject){ //declaramos la promesa
            var formData= new FormData(); //Instanciamos el objeto formData
            var xhr =new XMLHttpRequest(); //Instanciamos el objeto XMLHttpRequest

            for(var i=0; i<files.length; i++){ //Recorremos el archivo
                formData.append(name,files[i], files[i].name); //Guardamos el nombre del archivo en el formData
            }
            xhr.onreadystatechange=function(){ //Validamos la conexion y la peticion AJAX
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response);
                    }
                }
            }

            xhr.open('POST', url, true);//Enviamos la peticion al servidor
            xhr.send(formData);//Enviamos el formData

        });

    }

}
