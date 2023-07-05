import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = " fa-eye-slash";
  loginForm!: FormGroup;
  
constructor(private fb: FormBuilder){
  
}
ngOnInit(): void{
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
}
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onSubmit(){
    if(this.loginForm.valid){
      //send oblject to database
    }else{
      //throw error
    }
  }
  
}
 