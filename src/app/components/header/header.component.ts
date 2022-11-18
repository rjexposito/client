import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 // const usuario = '';
  constructor( private user: UsersService ) {
   user.login;
  }

  login(){
   this.user.login;
  }


  ngOnInit(): void {
  }

}
