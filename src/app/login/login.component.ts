import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from '../signup-form/username.validators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl("",[
        Validators.required,
        UsernameValidators.cannotContainSpace
      ]
      ),
      password: new FormControl('',Validators.required)
    }),
  });

  get username(){
    return this.form.get('account.username');
  }

  get password(){
    return this.form.get('account.password');
  }

  signIn(credentials){
    this.authService.login(credentials)
      .subscribe(result => {
        if(result){
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        else
          this.invalidLogin = true;
      })
  }

}
