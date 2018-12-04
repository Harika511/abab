import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      Say {{ getting }}
  `,
  //template: `  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //@Input() childMessage: string;
  message = 'Hola Mundo!';
  constructor() { }
  @Input() getting: string;

}

// import { Component, Output, EventEmitter } from '@angular/core';



// @Component({
//   selector: 'app-child',
//   template: ` <button (click)="sendMessage()">Send Message</button> `, 
//   styleUrls: ['./child.component.css']
// })
// export class ChildComponent {

//   message: string = "Hola Mundo!"

//   @Output() messageEvent = new EventEmitter<string>();

//   constructor() { }

//   sendMessage() {
//     this.messageEvent.emit(this.message)
//   }

  
// }