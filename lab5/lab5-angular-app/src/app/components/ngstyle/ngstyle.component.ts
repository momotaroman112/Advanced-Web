import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>;
  colorProperty: string = ''
  r: Number = 255;
  g: Number = 255;
  b: Number = 255;

  constructor() { }

  ngOnInit(): void {
  }
  ngStyleMethod(){
    this.colorProperty = 'rgb('+this.r+','+this.g+','+this.b+')'
    this.messageEvent.emit(this.colorProperty)
  }

}
