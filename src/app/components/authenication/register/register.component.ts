import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  confirmPassword: string;

  constructor(public userService: UsersService) {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  ngOnInit(): void {
  }

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
    });
  }
}
