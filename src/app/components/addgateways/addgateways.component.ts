import { Component, OnInit } from '@angular/core';
import { Gateway } from 'src/app/models/gateway.model';

@Component({
  selector: 'app-gateways',
  templateUrl: './addgateways.component.html',
  styleUrls: ['./addgateways.component.css']
})
export class GatewaysComponent implements OnInit {

  gateway: Gateway = {
  id: '1',
  serial_number: '', // a unique serial number (string)
  human_readable: '',   //human-readable name (string)
  ipv4_address: '',  // IPv4 address (to be validated)
                            //multiple associated peripheral devices
  published: false,
  };
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  saveGateway(): void {
    const data = {
      serial_number: this.gateway.serial_number,
      human_readable: this.gateway.human_readable,
    };

    // this.tutorialService.create(data)
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //       this.submitted = true;
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }

  newGateway(): void {
    this.submitted = false;
    this.gateway = {
      serial_number: '',
      human_readable: '',
      published: false
    };
  }

}
