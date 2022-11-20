import { Component, OnInit } from '@angular/core';
import { Gateway } from 'src/app/models/gateway.model';
import { AuthService } from '../../services/auth.service';
// import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-gateways',
  templateUrl: './addgateways.component.html',
  styleUrls: ['./addgateways.component.css']
})
export class GatewaysComponent implements OnInit {

  serial_number: string = "";
  human_readable: string = "";
  ipv4_address: string = "";
  // gateway: Gateway = {
  // id: '1',
  // serial_number:  'rrrr', // a unique serial number (string)
  // human_readable: '',   //human-readable name (string)
  // ipv4_address:   '',  // IPv4 address (to be validated)
  //                           //multiple associated peripheral devices
  // published: false,
  // };
  submitted = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  saveGateway(): void {
    const serial_number = this.serial_number;
    const human_readable = this.human_readable;
    const ipv4_address = this.ipv4_address;

    this.authService.createGateway(serial_number,human_readable,ipv4_address).subscribe({

    });
  }

  // newGateway(): void {
  //   this.submitted = false;
  //   this.gateway = {
  //     serial_number: '',
  //     human_readable: '',
  //     published: false
  //   };
  // }

}
