import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }
 passing:string="Input 1";
 @Input() getting="";
  ngOnInit() {
  }

}
