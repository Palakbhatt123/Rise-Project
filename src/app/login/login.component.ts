import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { LoginRequest } from '../models/login-request.model';
import { MealService } from '../services/meal.service';
import { Router } from '@angular/router';
import {SessionStorage, SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

// --------------LogicforEyeOption---------------

  hide = true;
  type = "password"; 
  model:LoginRequest;


  toggleVisibility(): void {
    this.hide = !this.hide;
    this.type == "password" ? this.type ="text": this.type = "password"
  
    // this.show = !this.show;
  }   

// -------------LogicforValidation--------------

loginForm !: FormGroup;



constructor(private sessionStorage:SessionStorageService,private fb:FormBuilder,private mealService:MealService,private router: Router)
{
  this.model={
    username:'',
    password:''
  };

}


ngOnInit(): void
{
  this.loginForm=this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]    
  })
}
   

  onSubmite(){
    console.log(this.model);
    this.mealService.loginVerify(this.model).subscribe({
      next:(response)=>{
        this.sessionStorage.store("emp",response)
        this.router.navigateByUrl("/home");
      },
      error:(error)=>{
        if(error.status==400){
          alert("username or password is incorrect");
        }
      }
    })
    if(this.loginForm.valid)
      {
        console.log(this.loginForm.value);
        alert("Form Login successfully.")
        //send data to database
      }
      else
      {
        console.log("form is not valid");
        //throw a error using toaster and with  required fileds
        this.validdateAllFromFileds(this.loginForm)
        alert("Your form is invalid");
      } 
  }
  
  
  private validdateAllFromFileds(formGroup:FormGroup)
  {
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }  
      else if(control instanceof FormGroup){
        this.validdateAllFromFileds(control)
      }    
    })
  }
  
}
