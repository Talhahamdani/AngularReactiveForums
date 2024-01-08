import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Reactive Form1';
  title2 = 'My Reactive Form2';

  loginForm:FormGroup;
  loginForm2:FormGroup;
  constructor(private fb:FormBuilder)
  {

  this.loginForm=fb.group({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    phoneno:new FormControl('',[Validators.required]),
    company:new FormControl('',[Validators.required]),
    address:new FormArray([
      new FormControl(null),
      new FormControl(null)
    ])
  })
    this.loginForm2=fb.group({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      phoneno:new FormControl('',[Validators.required]),
      company:new FormControl('',[Validators.required]),
    })


}


  formsubmitted: boolean = false;
  isformSubmitted:boolean = false;

  onsubmit(value:any)
  {
    if (this.loginForm.valid)
    {
      this.formsubmitted = true;
      this.isformSubmitted = true;
      console.log(this.loginForm.value);
    }
    else
    {
      this.loginForm.markAllAsTouched();
      console.log('All fields are required. Please fill in all the fields.');
    }
  }

  get name()
  {
    return this.loginForm.get("name")
  }
  get email()
  {
    return this.loginForm.get("email")
  }
  get phoneno()
  {
    return this.loginForm.get("phoneno")
  }
  get company()
  {
    return this.loginForm.get("company")
  }
}
