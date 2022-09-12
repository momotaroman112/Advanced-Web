import { Component, OnInit,Input,Output,EventEmitter,OnChanges,DoCheck,
  AfterContentChecked,AfterContentInit,AfterViewInit,
  AfterViewChecked,OnDestroy} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements 
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{

  @Input () parentData!:number;

  @Output () messageEvent = new EventEmitter<number>();
  
  childData! : number;
  constructor() {console.log('Consyructor Work!'); }

  ngOnInit(): void {
    this.childData = 0;
    this.parentData = 0;
    console.log('ngOnInit Work!');
  }
  ngOnChanges() {
    console.log('ngOnChanges Work!');
  }
  ngDoCheck() {
    console.log('ngDoCheck Work!');
  }
  ngAfterContentInit() {
    console.log('ngAferContentInit Work!');
  }
  ngAfterContentChecked() {
    console.log('ngAferContenCheck Work!');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked Work!');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit Work!');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy Work!');
  }
  Onclick2parent(){
    this.childData += 1;
    this.messageEvent.emit(this.childData)
  }


}
