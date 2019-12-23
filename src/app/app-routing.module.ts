import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DemoListComponent } from './demo-list/demo-list.component';
// import { DemoComponent } from './demo/demo.component';
import { EditDemoComponent } from './edit-demo/edit-demo.component';


const routes: Routes = [
  //{path:'demo-list',component:DemoListComponent},
  // {path:'demo',component:DemoComponent},

  {path:'edit-demo',component:EditDemoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
