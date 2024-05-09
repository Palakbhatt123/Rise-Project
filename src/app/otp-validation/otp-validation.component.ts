import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-otp-validation',
  templateUrl: './otp-validation.component.html',
  styleUrls: ['./otp-validation.component.css']
})
export class OTPValidationComponent {

  hide = true;
  type = "password"; 

  toggleVisibility(): void {
    this.hide = !this.hide;
    this.type == "password" ? this.type ="text": this.type = "password"
  }

  
  loginForm !: FormGroup;

constructor(private fb:FormBuilder)
{

}

ngOnInit(): void
{
  this.loginForm=this.fb.group({    
    password: ['',Validators.required]    
  })
}
   

  onSubmite(){
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
