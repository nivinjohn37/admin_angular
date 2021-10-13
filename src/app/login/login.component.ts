import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  title = 'Trops';
  durationInSeconds = 5;
  tr_log_email: string = "";
  tr_log_pass: string = "";
  tr_reg_email: string = "";
  tr_reg_pass: string = "";
  tr_reg_conf_pass: string = "";
  username = '';
  password = '';
  invalidLogin = false;
  login(): void {
    if (this.authenticationService.authenticate(this.tr_log_email, this.tr_log_pass)
    ) {
      this.router.navigate(['home'])
      this.invalidLogin = false
    } else{
      this.invalidLogin = true;
      this._snackBar.openFromComponent(SnackError, {
        duration: this.durationInSeconds * 1000,
      });
    }
      
  }

  register(): void {
  }

}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-login-error.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class SnackError {}
