import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }


 success:String="Loading";
 val: boolean=true;
 serverName="";
 name="";
 showBt=false;
network="not available";

variables: any[] = [ {
  "ID": "1",
  "Name" : "One"
},

{
  "ID": "2",
  "Name" : "Two"
} ];

 clicked (){
this.network="Network is available";
 }

onUpdateServerName(event: Event){
  this.serverName=(<HTMLInputElement>event.target).value;
}

displayName(){
  this.name="";
  this.showBt=true;
}


}
