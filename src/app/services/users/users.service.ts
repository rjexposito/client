import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {
    //return this.http.post("https://reqres.in/api/login", user);
    return this.http.get("http://localhost:4000/list_gateway", user);
  }
  register(user: any): Observable<any> {
    // return this.http.post("http://localhost:8080/api/gateway", user);
    return user;
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}
