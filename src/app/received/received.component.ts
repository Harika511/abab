import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent implements OnInit {

  constructor() { }
@Input() value: string;
received ="Inputting 2"
  ngOnInit() {
  }

}
