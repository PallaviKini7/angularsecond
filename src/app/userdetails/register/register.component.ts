import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  cities: any;
  
 loginForm: FormGroup |any;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      password : new FormControl('',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        
      ]),
      email:new FormControl('',
      Validators.email

      )
      
  })

}
submitLogin()
{
  console.log(this.loginForm.value)
  
}
selectedValues: string[] = ['val1','val2'];

constructor(private fb: FormBuilder) {
    
  this.cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];
}

}


