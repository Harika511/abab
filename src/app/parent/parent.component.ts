
//import { Component } from '@angular/core'; @Input

// @Component({
//   selector: 'app-parent',
//   template: `
//     <app-child [childMessage]="parentMessage"></app-child>
//   `,
//   styleUrls: ['./parent.component.css']
// })
// export class ParentComponent{
//   parentMessage = "message from parent"
//   constructor() { }
  
// }


// import { Component, ViewChild, AfterViewInit } from '@angular/core';
// import { ChildComponent } from "../child/child.component"; @ViewChild
// @Component({
//   selector: 'app-parent',
//   template: `    Message: {{ message }}     <app-child></app-child>   `,
//   styleUrls: ['./parent.component.css']
// })
// export class ParentComponent implements AfterViewInit {

//   @ViewChild(ChildComponent) child;

//   constructor() { }

//   message:string;

//   ngAfterViewInit() {
//     this.message = this.child.message
//   }
// }

// import { Component } from '@angular/core'; //@service
// import { DataService } from "../data.service";
// @Component({
//   selector: 'app-parent',
//   template: `  Message: {{message}} <app-sibling></app-sibling>  `,
//   styleUrls: ['./parent.component.css'],
//   providers: [DataService] 
// })
// export class ParentComponent {

//   //constructor() { }

//  // message:string;

//   receiveMessage($event) {
//     this.message = $event
//   }
//  message:string;
//   constructor(private data: DataService) { }
//   ngOnInit() {
//     this.data.currentMessage.subscribe(message => this.message = message)
//   }
// }

// import { Component } from '@angular/core';//@output

// @Component({
//   selector: 'app-parent',
//   template: `
//     Message: {{message}}
//     <app-child (messageEvent)="receiveMessage($event)"></app-child>
//     <ul>
//       <li><a [routerLink] = "['/Product']">Product</a></li>
//       <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
//    </ul>
//    <router-outlet></router-outlet>  `,
//   styleUrls: ['./parent.component.css']
// })
// export class ParentComponent {

//   constructor() { }

//   message:string;

//   receiveMessage($event) {
//     this.message = $event
//   }
// }

import { Component } from '@angular/core';

@Component ({
   selector: 'app-parent',
   template: `
   <ul>
      <li><a [routerLink] = "['/Product']">Product</a></li>
      <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
   </ul>
   <router-outlet></router-outlet>`
})
export class ParentComponent  { }