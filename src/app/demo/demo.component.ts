import { Component, OnInit } from '@angular/core';
import { DemoService } from './shared/demo-service';
import { Demo } from '../Model/demo.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  current:any;
 
  currentEmployee:Demo
  constructor(
    private demoservice : DemoService
  ) { 
    this.current=demoservice.currentEmployee;
    console.log("test" + this.current)
  }

  ngOnInit() {
  }

createAndUpdate(demoService:Demo){
  console.log(this.demoservice.currentEmployee)
  if (this.demoservice.currentEmployee.id != null) {
    console.log('Update');
    this.updateEmployee(this.demoservice.currentEmployee);
    
  } else {
    console.log('Create');
    this.createEmployee(this.demoservice.currentEmployee);
    
  }
}

createEmployee(emp:Demo){


  this.demoservice.createEmployee(emp).subscribe();
}
updateEmployee(emp:Demo){



}


}

