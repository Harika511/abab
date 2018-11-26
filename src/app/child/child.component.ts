import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  // template: ` @Input
  //     Say {{ message }}
  // `,
// @output
//   template: `
//   <button (click)="sendMessage()">Send Message</button>
// `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message = 'Hola Mundo!';
// @Input() childMessage: string;
 //@output
//  message: string = "Hola Mundo!"

//   @Output() messageEvent = new EventEmitter<string>();

//   constructor() { }

//   sendMessage() {
//     this.messageEvent.emit(this.message)
//   }

}
