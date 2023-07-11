import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import ValidateForm from 'src/app/Helpers/validateform';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = " fa-eye-slash";
  signUpForm! : FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void{
    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignUp(){
    if(this.signUpForm.valid){
      //send object to database
      console.log(this.signUpForm.value)
    }else{
      ValidateForm.validateAllFormFields(this.signUpForm)
      alert("Please fill all fields")
    }
  }

}
