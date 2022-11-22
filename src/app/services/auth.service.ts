import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const GATEWAY_API = 'http://localhost:8080/api/gateways';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  // Se puede llamar desde esta clase al crear gateway o crear un nuevo servicio propio para el Crud de gateway
  createGateway(serial_number: string, human_readable: string, ipv4_address: string): Observable<any>{
    return this.http.post(GATEWAY_API, {
      serial_number,
      human_readable,
      ipv4_address
    },httpOptions);
  }

  getAllGateways(): Observable<any>{
    return this.http.get(GATEWAY_API, httpOptions);
  }
}
