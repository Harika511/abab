import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarnComponent } from './warning/warn.component';
import { SuccessComponent } from './success/success.component'

  import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';


import { Appproduct } from './product/product.component';
import { AppInventory } from './inventory/Inventory.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'Product', component: Appproduct },
   { path: 'Inventory', component: AppInventory },
];

@NgModule({
  declarations: [
    AppComponent,ServerComponent, ServersComponent,WarnComponent,
     SuccessComponent,ParentComponent,ChildComponent, 
     SiblingComponent, LifecycleComponent, Appproduct, AppInventory
  ],
  imports: [
    BrowserModule,
    FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
