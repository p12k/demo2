import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import  {DemoService } from './demo/shared/demo-service';
import  {HttpClientModule} from'@angular/common/http';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditDemoComponent } from './edit-demo/edit-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoListComponent,
    EditDemoComponent,
    // DemoService 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DemoService,HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
