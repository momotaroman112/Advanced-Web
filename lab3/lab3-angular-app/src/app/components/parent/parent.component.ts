import { Component, OnInit,ViewChild,OnChanges,DoCheck,
         AfterContentChecked,AfterContentInit,AfterViewInit,
         AfterViewChecked,OnDestroy,} from '@angular/core';
import { ChildComponent } from '../child/child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{

  @ViewChild(ChildComponent)
  childComponent!: ChildComponent;

  parentData!: number;
  childData! : number;
  textMessage! : string;
  status! : string;
  public showChlid = true;
  constructor() { }
  ngOnInit(): void {
    this.childData = 0;
    this.parentData = 0;
    console.log('ngOnInit Work!');
  }
  ngOnChanges() {
    console.log('ngOnChanges Work!');
  }
  ngDoCheck() {
    console.log(this.textMessage)
    console.log('ngDoCheck Work!');
  }
  ngAfterContentInit() {
    console.log('ngAferContentInit Work!');
  }
  ngAfterContentChecked() {
    if(this.textMessage == "B6236168"){
      this.status = "Your ID is OK"
    }else{
      this.status = "ERROR"
    }
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
  onClick2Child() {
    this.parentData += 1;
  }
  onclickViewchild(){
    this.childComponent.Onclick2parent();
  }
  receiveData($event: any){
    this.childData = $event;
  }
  update(){
    this.showChlid= !this.showChlid
  }

}
