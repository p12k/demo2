import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo/shared/demo-service';
import { Demo } from '../Model/demo.model';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})
export class DemoListComponent implements OnInit {
allEmployee:Demo[];

  constructor( private demoService:DemoService ) { 
    
    
  }

  ngOnInit() {
    this.getAllEmployee();
  }



  getAllEmployee(){


this.demoService.getAllEmployees().subscribe(
  (data=>{
    this.allEmployee = data;
    console.log(data)
  })

 );

  }

 deleteEmployee(id:number){
console.log(id);
this.demoService.deleteEmployee(id).subscribe(
(data:Demo)=>{

  this.getAllEmployee();

 
});
 }

  // edit(emp){

    editEmployee(emp) {
      // console.log(emp);
     this.demoService.currentEmployee = emp;
      console.log(this.demoService.currentEmployee)
    }
  
 

    
  // this.demoService.currentEmployee = Object.assign({},emp);
  }





