import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura:number;
  @Output() getAutor=new EventEmitter();

  public autor:any;

  constructor() {
    this.autor={
      nombre:"Ariel Brito",
      web:"loquesea.com",
      youtubeChanel:"arielBrito"
    }
   }

  ngOnInit() {
    
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: this.anchura
      });  

}

 lanzar(event){
   console.log(event)
   this.getAutor.emit(this.autor)
 }

}
