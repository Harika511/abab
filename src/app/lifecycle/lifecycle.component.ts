import { Component, OnInit, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit ,OnChanges{
@Input() onchangeVal:String;
  constructor() { 

    console.log("Calling Constructor");
  }
ngOnChanges(){
  console.log("Calling ngOnChanges");
}
  ngOnInit() {
  }

}
