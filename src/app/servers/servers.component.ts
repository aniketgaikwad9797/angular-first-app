import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  serverId: number = 26;
  allowNewServer: boolean = false;
  serverCreationStatus = 'No servers are created';
  serverName = '';

  createServer() {
    this.serverCreationStatus =
      'A server was created, server name is ' + this.serverName;
    console.log(this.serverCreationStatus);
  }

  updateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
