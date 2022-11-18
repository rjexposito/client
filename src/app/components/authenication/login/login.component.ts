import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users/users.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;


  constructor(public userService: UsersService) {
    this.email = '';
    this.password = '';
   }

  ngOnInit(): void {
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      this.userService.setToken(data.token);
    });
  }

}
