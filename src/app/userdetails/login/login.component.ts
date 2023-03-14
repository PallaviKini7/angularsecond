import { Component,OnInit, } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 

  constructor(private fb: FormBuilder) {

  }
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
        
      ])
      
  })

}
submitLogin()
{
  console.log(this.loginForm.value)
  
}
cities = [
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
];
  
}
