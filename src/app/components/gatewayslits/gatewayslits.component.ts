import { Component, OnInit } from '@angular/core';
import { Gateway } from '../../models/gateway.model';
import { GatewaysService } from '../../services/gateways.service';


@Component({
  selector: 'app-gatewayslits',
  templateUrl: './gatewayslits.component.html',
  styleUrls: ['./gatewayslits.component.css']
})
export class GatewayslitsComponent implements OnInit {

  gateways?: Gateway[];
  currentGateway: Gateway = {};
  currentIndex = -1;
  title = '';

  constructor(private gatewaysService: GatewaysService) { }

  ngOnInit(): void {
    this.retrieveGateways();
  }

  retrieveGateways(): void {
    this.gatewaysService.getAll()
      .subscribe(
        data => {
          this.gateways = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveGateways();
    this.currentGateway = {};
    this.currentIndex = -1;
  }

  setActiveGateway(gateway: Gateway, index: number): void {
    this.currentGateway = gateway;
    this.currentIndex = index;
  }

  removeAllGateways(): void {
    this.gatewaysService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentGateway = {};
    this.currentIndex = -1;

    this.gatewaysService.findByTitle(this.title)
      .subscribe(
        data => {
          this.gateways = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
