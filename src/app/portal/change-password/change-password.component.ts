import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { ChangePasswordRequest } from 'src/app/models/changepassword-request.model';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changepassForm !: FormGroup;
  obj: any;
  model: ChangePasswordRequest;
  showSideMenu=false;

  constructor(private fb: FormBuilder, private sessionStorage: SessionStorageService, private route: Router,private mealService:MealService) {
    this.model = {
      empid:NaN,
      old_pass: '',
      new_pass: '',
      confirm_pass: '',
    };
  }

  ngOnInit(): void {
    this.obj = this.sessionStorage.retrieve("emp");
    if (!this.obj) {
      alert("your Session expired please login again");
      this.route.navigateByUrl("/");
    }
    this.changepassForm = this.fb.group({
      old_password: ['', Validators.required],
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    })
  }

  changePassword() {
    this.model.empid=this.obj.empId;
    if (this.model.confirm_pass && this.model.new_pass) {
      if (this.model.confirm_pass == this.model.new_pass) {
        if (this.model.old_pass == this.obj.password) {
          if (this.model.new_pass != this.obj.password) {
            if (confirm("Do you want to really change password?")) {
              console.log(this.model);
              this.mealService.changePassword(this.model).subscribe({
                next:(response)=>{
                  console.log(response);
                  alert("Password changed successfully");
                  this.sessionStorage.store("emp",response)
                  this.route.navigateByUrl("/home");
                },
                error:(error)=>{
                  if(error.status==400){
                    console.log(error);
                  }
                  console.log(error);
                }
              });
            }
          }
          else {
            alert("your new password cannot same as old password");
            this.changepassForm.controls["old_password"].setValue('');
            this.changepassForm.controls["confirm_password"].setValue("");
            this.changepassForm.controls["new_password"].setValue('');
          }
        }
        else {
          alert("old password doesnt match with current password")
          this.changepassForm.controls["old_password"].setValue('');
        }
      }
      else {
        alert("new password doesnt match with confirm password!!")
        this.changepassForm.controls["confirm_password"].setValue("");
        this.changepassForm.controls["new_password"].setValue('');
      }
    }
  }

}
