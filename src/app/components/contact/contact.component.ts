import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider:number;
  public anchuraToSlider:number;
  public autor:any;

  constructor() { }

  ngOnInit() {    
    
  
  }

  cargarSlider(){
    this.anchuraToSlider=this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider=null;
  }

  conseguirAutor(event){
    this.autor=event;
  }



}
