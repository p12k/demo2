import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule  } from "@angular/forms";
import { Router } from "@angular/router"; 
import { DemoService } from '../demo/shared/demo-service';
import { Demo } from '../Model/demo.model';

@Component({
  selector: 'app-edit-demo',
  templateUrl: './edit-demo.component.html',
  styleUrls: ['./edit-demo.component.css']
})
export class EditDemoComponent implements OnInit {

  empformlabel: string = 'Add User';  
  empformbtn: string = 'Save';
  user:Demo

  constructor(private formBuilder: FormBuilder, private router: Router, private empService: DemoService) {
    this.user = JSON.parse(localStorage.getItem('editUserId'))
    console.log(this.user )
  }
  addForm: FormGroup;  
  btnvisibility: boolean = true;

  ngOnInit() {
    this.addForm = this.formBuilder.group({  
      id: [],  
      firstname: [this.user.firstname, Validators.required],
      Lastname: ['', [Validators.required, Validators]] ,
    desination: ['', Validators.required],
    address: ['', Validators.required],
    contact: ['', Validators.required],
    });  
  
  //   onsubmit() {  
  //   console.log('Create fire');  
  //   this.empService.createUser(this.addForm.value)  
  //     .subscribe(data => {  
  //       this.router.navigate([this.newMethod()]);  
  //     },  
  //     error => {  
  //       alert(error);  
  //     });  
  // }  
  // onUpdate() {  
  //   console.log('Update fire');  
  //   this.empService.updateUser(this.addForm.value).subscribe(data => {  
  //     this.router.navigate(['list-user']);  
  //   },  
  //     error => {  
  //       alert(error);  
  //     });  
  // }


}
}

    // private newMethod(): any {
    //   return 'demo-list';
    // }