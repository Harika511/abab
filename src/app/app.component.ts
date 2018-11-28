import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<div>{{value}}</div>`, 
  styleUrls: ['./app.component.css'],
  providers :[appService]
})
export class AppComponent {
  name = 'harika';
 value : string ='';
 constructor(private _appService: appService){}

 ngOnInit(): void {
   this.value= this._appService.getApp();
 }


}
