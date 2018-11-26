import { Component, OnInit,AfterViewInit ,Input} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
//   template: ` @Input
//   <app-child [childMessage]="parentMessage"></app-child>
// `,
//@output
// template: `
//     Message: {{message}}
//     <app-child (messageEvent)="receiveMessage($event)"></app-child>
//   `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(ChildComponent) child;

  

  message:string;

  ngAfterViewInit() {
    this.message = this.child.message
  }
  //parentMessage = "message from parent" 
  //@output
  // constructor() { }

  // message:string;

  // receiveMessage($event) {
  //   this.message = $event
  // }

}
