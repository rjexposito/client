import { Component, OnInit } from '@angular/core';
import { Gateway } from 'src/app/models/gateway.model';
import { GatewaysService } from '../../services/gateways.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-gateways',
  templateUrl: './addgateways.component.html',
  styleUrls: ['./addgateways.component.css']
})
export class GatewaysComponent implements OnInit {

  serial_number: string = "";
  human_readable: string = "";
  ipv4_address: string = "";
  submitted = false;
  errorMessage = '';

  all_gateways: Gateway[] = [];

  constructor(private service: GatewaysService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.service.getAll().subscribe( gateways_list => {
      this.all_gateways = gateways_list;
     })
  }

  saveGateway(): void {
    const serial_number = this.serial_number;
    const human_readable = this.human_readable;
    const ipv4_address = this.ipv4_address;
    this.service.create({
      'serial_number': serial_number,
      'human_readable': human_readable,
      'ipv4_address': ipv4_address}).subscribe(_ =>{
      this.getAll();
      this.initialize();
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

  initialize(): void{
    this.serial_number = "";
    this.human_readable = "";
    this.ipv4_address = "";
  }
}
