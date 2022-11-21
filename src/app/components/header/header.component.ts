import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 // boolean: a = false;
  constructor( private auth : AuthService) {
    auth.isAuntenticated();
  }

  ngOnInit(): void {
  }

}
