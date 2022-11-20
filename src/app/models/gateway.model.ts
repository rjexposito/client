//import { Peripheral } from 'models';

export class Gateway {
  id?: any;
  serial_number?: string;     // a unique serial number (string)
  human_readable?: string;    //human-readable name (string)
  ipv4_address?: string;      // IPv4 address (to be validated)
                              //multiple associated peripheral devices
  published?: boolean;
}
